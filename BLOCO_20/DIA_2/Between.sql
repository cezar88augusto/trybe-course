-- BETWEEN

-- COM INTEIROS
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

-- COM STRINGS
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

-- COM DATAS
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

-- ANALISAR PERFORMACE
-- Clicar em Execution Plan na barra lateral 
SELECT * FROM sakila.rental
where customer_id in (1,2,3,4,5,6,7,9,10);

SELECT * FROM sakila.rental
where customer_id between (1) and (10);

-- Encontre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
SELECT last_name, email from sakila.customer
WHERE last_name between 'boyd' AND 'morales';

-- Encontre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
SELECT email FROM SAKILA.CUSTOMER
WHERE address_id IN (172 ,173 ,174 ,175 ,176)
ORDER BY email;

-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
SELECT count(*) FROM sakila.payment WHERE payment_date
BETWEEN CAST('2005-05-01' AS DATE)
AND CAST('2005-08-01' AS DATE);

-- Encontre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6.
-- Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6 
ORDER BY rental_duration DESC;

-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para menores de idade. Os resultados devem estar ordenados por classificação mais abrangente primeiro.
SELECT title, rating FROM sakila.film
WHERE rating IN ('G','PG','PG-13')
ORDER BY rating
LIMIT 50