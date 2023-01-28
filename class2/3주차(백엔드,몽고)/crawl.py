import requests
from bs4 import BeautifulSoup
from pymongo.mongo_client import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client.local

collection = db.yes24

rows = collection.find()
for row in rows[:40]:
    print(row)

# res = requests.get("http://www.yes24.com/24/Category/BestSeller")
# soup = BeautifulSoup(res.text, "html.parser")

# for i in range(40):
#     index = str(i + 1)
#     if index == "19":
#         index = "19_line"
#     elif index == "20":
#         index = "20_line"
    
#     sstr = "#bestList > ol > li.num" + index + " > p.copy > a"
#     ts = soup.select_one(sstr)

#     db['yes24'].insert_one({
#         'Title': ts.text
#     })