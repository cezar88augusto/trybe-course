CREATE DATABASE IF NOT EXISTS Funcionarios;

CREATE TABLE funcionario(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
	sobrenome VARCHAR(50),
    contato VARCHAR(50),
    data_cadastro VARCHAR(50)
) ENGINE=InnoDB; 

CREATE TABLE setor(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_setor VARCHAR(50)   
) ENGINE=InnoDB; 

CREATE TABLE funcionario_setor(
    funcionario_id INT NOT NULL,
    setor_id INT PRIMARY KEY AUTO_INCREMENT,
    foreign key (funcionario_id) references funcionario(funcionario_id),
    foreign key (setor_id) references setor(setor_id)
) engine=InnoDB;

