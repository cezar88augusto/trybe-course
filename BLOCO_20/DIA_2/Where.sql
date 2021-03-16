-- WHERE

-- Selectionar atores com um last_name com um certo ID
SELECT * FROM sakila.actor
WHERE last_name = 'DAVIS' and actor_id = 4;

-- Selecionar filmes que tiverem length maior do que 50
SELECT * FROM sakila.film
WHERE length > 50
ORDER BY length;

-- Selecionar filmes diferentes de algo
SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost <> 20;

-- Selecionar usando o OU
SELECT * FROM sakila.film
WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13';

-- Selecionar usando o IS NULL
SELECT * FROM sakila.rental
WHERE return_date IS NULL;

-- Selecionar usando o IS
SELECT * FROM sakila.staff
WHERE active IS TRUE;

-- Selecionar usando IS NOT NULL
SELECT * FROM sakila.address
WHERE address2 IS NOT NULL;

-- Selecionar usando o LIKE
SELECT * FROM sakila.film
WHERE title NOT LIKE 'academy%';

-- Precisamos identificar o cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
SELECT * FROM sakila.customer
WHERE email LIKE 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- Precisamos de um relatório dos nomes, em ordem alfabética, dos clientes que não estão mais ativos no nosso sistema e pertencem à loja com o id 2. 
-- Porém, não inclua o cliente KENNETH no resultado.
SELECT * FROM sakila.customer
WHERE store_id = 2 
AND first_name NOT LIKE 'KENNETH';

-- O setor financeiro quer saber nome, descrição, ano de lançamento e quais são os 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares.
SELECT * FROM sakila.film
WHERE rating = 'G' and replacement_cost > 18.00
ORDER BY replacement_cost DESC
LIMIT 100;

-- Quantos clientes estão ativos e na loja 1?
SELECT * FROM sakila.customer
WHERE store_id = 1
AND active IS TRUE;

-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
SELECT * FROM sakila.customer
WHERE store_id = 1
AND active IS FALSE;

-- Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes.
SELECT * FROM sakila.film
WHERE rating = 'NC-17' OR rating = 'R'
ORDER BY rental_rate
LIMIT 50;

