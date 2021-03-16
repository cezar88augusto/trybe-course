-- Stored Function

--  Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:
USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:

SELECT MoviesWithActor(1);

-- -------------------------------------------------------

-- Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:

USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);

-- -------------------------------------------------------

-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_payments INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id INTO total_payments;
    RETURN total_payments;
END $$

DELIMITER ;

-- Como usar:

SELECT GetTotalPayments(2);
-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetCorrespondingFilm(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
    DECLARE movie_title VARCHAR(500);
    SELECT distinct F.title
    FROM sakila.inventory I
    INNER JOIN sakila.film F
    ON F.film_id = I.film_id
    WHERE I.inventory_id = id INTO movie_title;
    RETURN movie_title;
END $$

DELIMITER ;

-- Como usar:

SELECT GetCorrespondingFilm(2);
-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetMovieAmountInCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_amount INT;
    SELECT COUNT(*)
    FROM sakila.category AS c
    INNER JOIN sakila.film_category AS fc ON fc.category_id = c.category_id
    WHERE c.name = category INTO movie_amount;
    RETURN movie_amount;
END $$

DELIMITER ;

-- Como usar:

SELECT GetMovieAmountInCategory('Horror');

