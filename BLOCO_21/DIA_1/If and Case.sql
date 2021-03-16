-- IF
-- SINTAXE: SELECT IF

-- Exibir todos os filmes caros e baratos
SELECT title, IF (rental_rate > 0.99, 'Caro', 'Barato') from sakila.film;

-- Mais condições
SELECT title, rental_rate,
	CASE 
		WHEN rental_rate = 0.99 THEN 'BARATO'
		WHEN rental_rate = 2.99 THEN 'MÉDIO'
        WHEN rental_rate = 4.99 THEN 'CARO'
	ELSE rental_rate = 'NÃO CLASIFICADO'
END AS valor
FROM sakila.film
LIMIT 10;
