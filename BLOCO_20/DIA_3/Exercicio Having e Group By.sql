-- Exerício usando Group By e Having

-- 1. (tabela city) Usando o CountryCode, mostre a média populacional por país. E arredonde o valor para o mais próximo.
SELECT * FROM world.city;
SELECT CountryCode, ROUND(AVG(Population)) from world.city
GROUP BY CountryCode;

-- 2. (tabela city) Usando o CountryCode, mostre a população máxima por país.
SELECT CountryCode, MAX(Population) from world.city
GROUP BY CountryCode;

-- 3. (tabela city) Usando o CountryCode, mostre a população mínima por país.
SELECT CountryCode, MIN(Population) from world.city
GROUP BY CountryCode;

-- 4. (tabela country) Faça um agrupamento pelo continente, e mostre quantos países tem em cada um, e ordene do mais populoso para o menos populoso.
SELECT * FROM world.country;
SELECT Continent, Count(*) as Total_Country FROM world.country
GROUP BY Continent
ORDER BY Total_Country DESC;

-- 5. (tabela countrylanguage) Usando a coluna CountryCode, mostre a quantidade de línguas faladas em cada país, 
-- mas filtre apenas pelos países que falem pelo menos 10 línguas
SELECT * FROM world.countrylanguage;
SELECT CountryCode, COUNT(*) as Spoken_Languages FROM world.countrylanguage
GROUP BY CountryCode
HAVING Spoken_Languages > 10;
