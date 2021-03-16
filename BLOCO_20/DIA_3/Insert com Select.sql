-- Insert and Select

-- Insira um novo funcionário na tabela sakila.staff.

-- MODELO:
-- INSERT INTO nome_da_tabela (coluna1, coluna2)
-- VALUES ('valor_coluna1', 'valor_coluna2');

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username)
VALUES ('Cézar', 'Moreira', '5', 'cezar88augusto', 1, 1,'CCK');
select * from sakila.staff;

-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". 
-- Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.

-- Modelo
-- INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
-- ('valor_1','valor_2'),
-- ('valor_3','valor_4'),
-- ('valor_5','valor_6');

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username) VALUES 
('Luísa', 'Sampaio', '5', 'lulusamp', 1, 1,'lulu'),
('Mel', 'Magóka', '5', 'magoka', 1, 1,'crocodila'),
('Maria do Carmo', 'Ruas', '5', 'mdc2020', 1, 1,'mdc');

select * from sakila.staff;

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.

INSERT INTO sakila.actor(first_name, last_name)
    SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.

INSERT INTO sakila.catefory (name) VALUES
('Suspense'),
('History'),
('Others');

select * from sakila.category;

-- Cadastre uma nova loja na tabela sakila.store.

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

select * from sakila.store;
