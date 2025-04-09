CREATE TABLE "VotosInternos" (
  id_voto SERIAL PRIMARY KEY,
  fk_id_evento INT NOT NULL REFERENCES "Eventos"(id_evento),
  fk_id_aluno INT NOT NULL REFERENCES "Alunos"(id_aluno), 
  fk_id_representante INT NOT NULL REFERENCES "Representantes"(id_representante),
  data_criacao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_evento, fk_id_aluno)
);

CREATE TABLE "VotosExternos" (
  id_voto SERIAL PRIMARY KEY,
  fk_id_evento INT NOT NULL REFERENCES "Eventos"(id_evento),
  fk_id_projeto INT NOT NULL REFERENCES "Projetos"(id_projeto),
  fk_id_visitante INT REFERENCES "Visitantes"(id_visitante),
  data_criacao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_visitante, fk_id_projeto)
);

CREATE OR REPLACE FUNCTION notificar_novo_votoE() RETURNS trigger AS $$
DECLARE
  qtd_votos INT;
  registro_json JSON;
BEGIN
  SELECT COUNT(*) INTO qtd_votos
  FROM "VotosExternos"
  WHERE fk_id_projeto = NEW.fk_id_projeto;

  registro_json := json_build_object(
    'id_voto', NEW.id_voto,
    'id_projeto', NEW.fk_id_projeto,
    'qtd_votos', qtd_votos
  );

  PERFORM pg_notify('new_VoteE', registro_json::TEXT);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

create trigger trigger_notificar_novo_votoE
after insert on VotosExternos
for each row
execute function notificar_novo_votoE();



CREATE OR REPLACE FUNCTION notificar_novo_votoI() RETURNS trigger AS $$
DECLARE
  qtd_votos INT;
  registro_json JSON;
BEGIN
  SELECT COUNT(*) INTO qtd_votos
  FROM "VotosInternos"
  WHERE fk_id_representante = NEW.fk_id_representante;

  registro_json := json_build_object(
    'id_voto', NEW.id_voto,
    'id_representante', NEW.fk_id_representante,
    'qtd_votos', qtd_votos
  );

  PERFORM pg_notify('new_VoteI', registro_json::TEXT);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_notificar_novo_votoI
AFTER INSERT ON "VotosInternos"
FOR EACH ROW
EXECUTE FUNCTION notificar_novo_votoI();