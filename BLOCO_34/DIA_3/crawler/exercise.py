import requests
from parsel import Selector

"""
Exercício 1
Faça uma requisição ao site https://httpbin.org/encoding/utf8 
e exiba seu conteúdo de forma legível.
"""

""" response = requests.get("https://httpbin.org/encoding/utf8")
selector = Selector(text=response.text)
print(response.text)
"""

"""
Exercício 2
Faça uma requisição ao recurso usuários da API do Github ( https://api.github.com/users ), 
exibindo o username e url de todos os usuários retornados. 
"""

""" response2 = requests.get("https://api.github.com/users")
users = response2.json()

for user in users:
    print(user['login'] + ' ' + user['url']) """

""" Exercício 3 Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi bem sucedido.
Para verificar se foi bem sucedido, faça assert "bot detected" not in response.text , se nada acontecer, seu código está funcionando.
🦜 Faça a inspeção de como a requisição é feita pelo navegador para conseguir replicar através do código. """


""" response3 = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert "bot detected" not in response3.text
 """

""" Exercício 4 Baseados em uma página contendo detalhes sobre um livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html , faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.
O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76 .
A descrição de ter o sufixo "more..." removido quando existir.
Os campos extraídos devem ser apresentados separados por vírgula. Ex: título,preço, descrição,capa. """

URL_BASE = "http://books.toscrape.com/catalogue/"
response4 = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(text=response4.text)

title = selector.css("h1::text").get()
price = selector.css(".product_main > .price_color::text").re_first(
    r"\d*\.\d{2}"
)
description = selector.css(".product_page > p::text").get()

suffix = "...more"

if description.endswith(suffix):
    description = description[: -len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

""" Exercício 5 Modifique o exercício anterior para retornar também quantos livros estão disponíveis apresentando como último campo no retorno. """

avaliable = selector.css(".table-striped > tr > td::text")[5].re_first("\d")
""" ou """
availability = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, cover, description, avaliable, sep=",")

