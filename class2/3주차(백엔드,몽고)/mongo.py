from pymongo.mongo_client import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client.local
collection = db.Fast

collection.insert_one({
  "title": "Fastcampus Course!",
  "content": "3week Course"
})

row = collection.find_one()

print(row)


rows = collection.find_one({"title": "Fastcampus Course!"})
print(rows)