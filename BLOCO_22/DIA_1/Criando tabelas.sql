
-- SINTAXE CRIAÇÃO DE UM BANCO DE DADOS:
CREATE DATABASE IF NOT EXISTS albuns;

-- SELECIONAR O BANCO DE DADOS:
USE albuns;

-- CRIAR A TABELA artistas (tabela pai)
CREATE TABLE artista(
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
) ENGINE=InnoDB; -- Armazenamento padrão, se não colocar, vai ser utilizado por padrão.

-- CRIAR A TABELA estilomusical (tabela pai)
CREATE TABLE estilomusical(
estilo_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

-- CRIAR A TABELA FILHA
CREATE TABLE album(
album_id INT PRIMARY KEY AUTO_INCREMENT,
artist_id INT NOT NULL,
titulo VARCHAR(100) NOT NULL,
preco decimal(5,2) NOT NULL,
estilo_id INT NOT NULL,
FOREIGN KEY (artist_id) REFERENCES artista(artista_id),
FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB;



