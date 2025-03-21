CREATE TABLE votacao_projetos(
id_voto SERIAL PRIMARY KEY,
fk_id_projeto INTEGER NOT NULL,
fk_id_votante INTEGER NOT NULL,
date_voto TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create or replace function novo_voto() returns trigger as $$
declare 
	registros_json JSON;
begin
	registros_json := json_build_object(
		'id_voto', new.id_voto,
		'fk_id_projeto', new.fk_id_projeto,
		'fk_id_votante', new.fk_id_votante,
		'data_voto', new.data_voto
);

	Perform pg_notify('new_votepr', registros_json::TEXT);
	return new;
end;
$$ language plpgsql;

create trigger trigger_novo_voto
after insert on votacao_projetos
for each row
execute function novo_voto();