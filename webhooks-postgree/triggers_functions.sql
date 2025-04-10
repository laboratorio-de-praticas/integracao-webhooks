CREATE TYPE "EventoStatus" AS ENUM ('Ativo', 'Em_Preparo', 'Em_Contagem', 'Finalizado');
CREATE TYPE "EventoTipos" AS ENUM ('Externo', 'Interno');

CREATE TABLE "Eventos" (
  id_evento SERIAL PRIMARY KEY,
  tipo_evento "EventoTipos" NOT NULL,
  nome_evento TEXT,
  descricao_evento TEXT,
  status_evento "EventoStatus" NOT NULL,
  curso_semestre TEXT,
  data_inicio TIMESTAMP,
  data_fim TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "VotosInternos" (
  id_voto SERIAL PRIMARY KEY,
  fk_id_evento INT REFERENCES "Eventos"(id_evento),
  fk_id_aluno INT, 
  fk_id_representante INT,
  data_criacao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_evento, fk_id_aluno)
);

CREATE TABLE "VotosExternos" (
  id_voto SERIAL PRIMARY KEY,
  fk_id_evento INT REFERENCES "Eventos"(id_evento),
  fk_id_projeto INT,
  fk_id_visitante INT,
  data_criacao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_visitante, fk_id_projeto)
);

CREATE OR REPLACE FUNCTION notificar_novo_votoE() RETURNS trigger AS $$
DECLARE
  qtd_votos INT;
  tipoEvent TEXT;
  registro_json JSON;
BEGIN
  SELECT COUNT(*) INTO qtd_votos
  FROM "VotosExternos"
  WHERE fk_id_projeto = NEW.fk_id_projeto;
  Select "Eventos".tipo_evento INTO STRICT tipoEvent
  from "Eventos" 
  where id_evento = new.fk_id_evento;

  registro_json := json_build_object(
    'id_voto', NEW.id_voto,
    'id_projeto', NEW.fk_id_projeto,
	'tipoevento', tipoEvent,
    'qtd_votos', qtd_votos
  );

  PERFORM pg_notify('new_vote', registro_json::TEXT);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

create trigger trigger_notificar_novo_votoE
after insert on "VotosExternos"
for each row
execute function notificar_novo_votoE();

CREATE OR REPLACE FUNCTION notificar_novo_votoI() RETURNS trigger AS $$
DECLARE
  qtd_votos INT;
  tipoEvent TEXT;
  registro_json JSON;
BEGIN
  SELECT COUNT(*) INTO qtd_votos
  FROM "VotosInternos"
  WHERE fk_id_representante = NEW.fk_id_representante;
  Select "Eventos".tipo_evento INTO STRICT tipoEvent
  from "Eventos" 
  where id_evento = new.fk_id_evento;

  registro_json := json_build_object(
    'id_voto', NEW.id_voto,
    'id_representante', NEW.fk_id_representante,
	'tipoevento', tipoEvent,
    'qtd_votos', qtd_votos
  );

  PERFORM pg_notify('new_vote', registro_json::TEXT);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_notificar_novo_votoI
AFTER INSERT ON "VotosInternos"
FOR EACH ROW
EXECUTE FUNCTION notificar_novo_votoI();