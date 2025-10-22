create database userdb_4;

-- criar a tabela
create table users (
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null
);
