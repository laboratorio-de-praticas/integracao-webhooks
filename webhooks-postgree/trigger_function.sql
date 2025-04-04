create type eventoTipos as Enum ('Externo', 'Interno');

create table Eventos(
id_evento SERIAL PRIMARY KEY,
tipoEvento eventoTipos,
nomeEvento VARCHAR(255),
descricaoEvento TEXT,
statusEvento boolean,
data_inicio TIMESTAMP,
data_fim TIMESTAMP,
data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
data_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table Votos(
id_voto SERIAL PRIMARY KEY,
id_candidato INT,
id_participante INT,
id_evento INT,
data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
data_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (id_evento) REFERENCES Eventos(id_evento)
);

create or replace function notificar_novo_voto() returns trigger as $$
declare 
  	tipoEvent VARCHAR;
	registro_json JSON;
begin
	Select Eventos.tipoEvento INTO STRICT tipoEvent
	from Eventos where id_evento = new.id_evento;
	registro_json := json_build_object(
		'id_voto', new.id_voto,
		'id_candidato', new.id_candidato,
		'id_participante', new.id_participante,
		'id_evento', new.id_evento,
		'tipoevento', tipoEvent,
		'data_criacao', new.data_criacao
);
	Perform pg_notify('new_vote', registro_json::TEXT);
	return new;
end;
$$ language plpgsql;

create trigger trigger_notificar_novo_voto
after insert on Votos
for each row
execute function notificar_novo_voto();

INSERT INTO Eventos(tipoEvento,nomeEvento,descricaoEvento,
statusEvento,data_inicio,data_fim) VALUES
('Interno','Votação Representantes 2025-2','A votação de representantes do 2º semestre de 2025',
TRUE, '2025-03-31 18:30:00', '2025-04-10 23:00:00'),
('Externo','Hubtech 2025-2','A votação dos projetos da hubtech de 2025',
TRUE, '2025-04-15 18:30:00', '2025-04-15 23:00:00');

select * from eventos;

insert into votos(id_candidato,id_participante,id_evento)
VALUES
(2,2,2);