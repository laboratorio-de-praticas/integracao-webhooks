CREATE TABLE votacao_representantes(
id_voto SERIAL PRIMARY KEY,
fk_id_representante INTEGER NOT NULL,
fk_id_aluno INTEGER NOT NULL,
date_voto TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 


create or replace function notificar_novo_voto() returns trigger as $$
declare 
	registro_json JSON;
begin
	registro_json := json_build_object(
		'id_voto', new.id_voto,
		'fk_id_representante', new.fk_id_representante,
		'fk_id_aluno', new.fk_id_aluno,
		'data_voto', new.data_voto
);

	Perform pg_notify('new_voterp', registro_json::TEXT);
	return new;
end;
$$ language plpgsql;

create trigger trigger_notificar_novo_voto
after insert on votacao_representantes
for each row
execute function notificar_novo_voto();

