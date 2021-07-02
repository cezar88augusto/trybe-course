from pymongo import MongoClient

""" Salvar um arquivo JSON dentro da pasta e rodar o comando: """
"""  mongoimport --db library books.json """

bookCategory = input("Escolha a categoria: ")

with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": bookCategory}):
        print(book["title"])


with MongoClient() as client:
    db = client.library
    pipelines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"$count": -1}},
    ]
    for category in db.books.aggregate(pipelines):
        print(f"{category["id"]} {category["count"]}")
