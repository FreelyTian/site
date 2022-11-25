from fastapi import FastAPI
from pymongo import MongoClient
import os
from typing import Optional

url = os.environ.get('MONGO_URL')

app = FastAPI()

client = MongoClient('mongodb://ADM:<3340986>@urubank-adm.jn3nr.mongodb.net/?retryWrites=true&w=majority')

db = client['college']
col = db['zecana']
print(db.col.count_documents("_id"))

@app.get("/")
async def lerTodos():
    return {"Did."}

@app.put("/send/{name}")
async def insert(name: str, renda: Optional[float]):
    data : dict = {
        "name": name,
        "renda": renda
    } 
    db.col.insert_one(data)
    return data