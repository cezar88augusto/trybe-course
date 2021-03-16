-- EXISTES

-- Atores que fizeram filme:
SELECT * FROM sakila.actor AS a
WHERE EXISTS (
		SELECT * FROM sakila.film_actor AS f
        WHERE a.actor_id = f.actor_id
        );

-- Atores que não fizeram filme:
SELECT * FROM sakila.actor AS a
WHERE NOT EXISTS (
		SELECT * FROM sakila.film_actor AS f
        WHERE a.actor_id = f.actor_id
        );
        
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT * FROM hotel.Books AS b
WHERE NOT EXISTS (
		SELECT * 
        FROM hotel.Books_Lent AS l
        WHERE b.id = l.book_id 
		);    
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT * FROM hotel.Books AS b
WHERE EXISTS (
		SELECT * FROM hotel.Books_Lent AS l
        WHERE b.id = l.book_id 
        AND Title LIKE '%lost%'
		);
-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT * FROM hotel.Customers AS cust
WHERE NOT EXISTS (
		SELECT * 
        FROM hotel.CarSales AS cars
        WHERE cust.CustomerID = cars.CustomerID
		);
-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT cus.name, car.name
FROM hotel.Cars car
INNER JOIN hotel.Customers cus
WHERE EXISTS(
    SELECT *
    FROM hotel.CarSales
    WHERE CustomerID = cus.CustomerId
    AND carID = car.ID
);

        

        

