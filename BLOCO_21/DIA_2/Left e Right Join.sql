-- LEFT e RIGHT JOIN
-- A diferença básica é a REFERENCIA. Left coloca a tabela da esquerda em evidência, trazendo todos os dados dela independentemente se houver ou não dados na tabela da direita da query
-- O right join é o oposto disto.alter
-- O inner join só traz a junção das tabelas.

SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name;

SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
INNER JOIN sakila.actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;