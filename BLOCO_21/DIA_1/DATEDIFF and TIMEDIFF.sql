-- DATAS

-- DATA ATUAL
SELECT CURRENT_DATE(); -- YYYY-MM-DD
-- AGORA
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- DIFERENÇA ENTRE DATAS
-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');
-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- DIFERENÇA ENTRE HORAS
-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- E por fim, podemos extrair qualquer parte de uma data de uma coluna:
SELECT DATE(data_cadastro); -- YYYY-MM-DD
SELECT YEAR(data_cadastro); -- Ano
SELECT MONTH(data_cadastro); -- Mês
SELECT DAY(data_cadastro); -- Dia
SELECT HOUR(data_cadastro); -- Hora
SELECT MINUTE(data_cadastro); -- Minuto
SELECT SECOND(data_cadastro); -- Segundo

-- Usar select com a data atual:

SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT TIMEDIFF('10:25:45', '11:00:00');