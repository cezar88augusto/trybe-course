import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
thumb_url = selector.css("div.image_container a::attr(href)").get()

""" Primeiro elemento """
""" print(selector.css("img.thumbnail").get()) """

""" Todos elementos """
""" for thumbail in selector.css("img.thumbnail").getall():
    print(thumbail) """

""" Pegar uma imagem: a que é filho de div """
""" thumbnail_request = requests.get("http://books.toscrape.com/" + thumb_url)
thumbnail_selector = Selector(text=thumbnail_request.text)
book_title = thumbnail_selector.css("div.product_main h1")
print(book_title)
 """


""" RASPANDO O DADOS """
for url in selector.css("img.thumbnail").getall():
    """ Pegar uma imagem: a que é filho de div """
    thumbnail_request = requests.get("http://books.toscrape.com/" + thumb_url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css("div.product_main h1")
    print(book_title.get())