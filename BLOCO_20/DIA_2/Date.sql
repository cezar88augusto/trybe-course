-- DATE

-- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

-- Encontra um pagamento com dia e hora exatos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';

-- Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo

-- Quantos aluguéis temos com a data de retorno 2005-08-29 ? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT COUNT(*) FROM sakila.rental
WHERE DATE(return_date) = '2005-08-29';
-- Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005 ?
SELECT *
FROM sakila.payment
WHERE payment_date 
BETWEEN '01/07/2005 00:00:00' AND '22/08/2005 00:00:00';
-- Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
   SELECT DATE(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Ano
    SELECT YEAR(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Mês
    SELECT MONTH(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Dia
    SELECT DAY(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Hora
    SELECT HOUR(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Minuto
    SELECT MINUTE(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Segundo
    SELECT SECOND(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
-- Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
    SELECT rental_id,rental_date FROM sakila.rental
    WHERE rental_date like '2005-08-18 00:14:03%'