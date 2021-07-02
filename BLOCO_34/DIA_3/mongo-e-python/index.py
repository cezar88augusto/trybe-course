from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)

""" BUSCAR UME """
""" print(db.books.find_one()) """

""" BUSCAR VÁRIOS """
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])


client.close()  # fecha a conexão com o banco de dados

""" Pode ser feito assim tb """

with MongoClient() as client:
    db = client.database
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])