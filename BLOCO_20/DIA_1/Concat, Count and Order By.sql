-- CONCAT

-- Monte uma query que exiba seu nome na tela;
SELECT 'Cézar';
-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Cézar', 'Moreira', 33, 'Desenvolvedor Web';
-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , 
-- que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
SELECT 'Cézar' AS firstName, 'Moreira' AS lastName, 33 AS AGE, 'Web Developer' AS 'Area';
-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT 
SELECT 13 * 8;
-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS DataAtual;

-- Concatenar duas colunas
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
-- Concatenar duas colunas nomeando a coluna
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
-- Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna 
-- e dê a ela o nome Lançamento do Filme .
SELECT CONCAT(title, ' ', release_year) AS 'Laçamento do Filme' FROM sakila.film;
-- Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) 
-- em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;
-- Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address;





-- DISTINCT

-- Monte uma query para encontrar pares únicos de nomes e idades.
SELECT DISTINCT nome FROM Escola.Alunos;
SELECT DISTINCT idade FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
-- Resp: 4
-- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT nome FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
-- Resp: 4
-- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT idade FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
-- Resp: 4




-- COUNT

-- Contar todos os dados
SELECT COUNT(*) FROM sakila.actor;
-- Contar os valores dentro de uma coluna específica
SELECT COUNT(first_name) from sakila.actor;
-- Contar os valores dentro de uma coluna específica NÃO IGUAIS
SELECT COUNT(DISTINCT first_name) FROM sakila.actor;
-- Contar os valores dentro de várias coluna específica NÃO IGUAIS
SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor;
-- Contar a quantidade de itens com uma condição
SELECT COUNT(district) FROM sakila.address
WHERE district = 'Alberta';
-- Quantas senhas temos cadastradas na tabela Staff?
SELECT COUNT(password) FROM sakila.staff;
-- Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(staff_id) FROM sakila.staff;
-- Quantas fotos temos cadastradas na tabela Staff?
SELECT COUNT(staff_id) FROM sakila.staff;




-- ORDER BY

-- Ordenar do Menor ao Maior
SELECT * FROM sakila.address
ORDER BY address ASC;

-- Ordenar do Maior ao Menor
SELECT * FROM sakila.address
ORDER BY address DESC;

-- Ordenar mais de uma coluna
SELECT * FROM sakila.address
ORDER BY address, district;



-- Exercício 1 

-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;
-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
SELECT title, release_year, rating FROM sakila.film;
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados no banco sakila.
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
-- Crie queries para descobrir o seguinte:
-- Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM sakila.film;
-- Quantos clientes temos registrados?
SELECT COUNT(*) FROM sakila.customer;
-- Quantos sobrenomes únicos temos no banco de dados?
SELECT COUNT(DISTINCT last_name) from sakila.customer; 
-- Quantas categorias de filmes o banco sakila possui?
SELECT COUNT(*) FROM sakila.category;
-- Quantos países são atendidos pela sakila?
SELECT COUNT(*) FROM sakila.country;
-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english .
SELECT * FROM sakila.language where name != 'English';
-- OU
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
-- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição. 
-- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, rental_duration, rating, replacement_cost FROM sakila.film ORDER BY rental_duration, replacement_cost DESC;
