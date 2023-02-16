import datetime
from flask_pymongo import PyMongo
from flask import Flask, render_template, request, redirect

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/local'
mongo = PyMongo(app)

@app.route('/guest_write', methods=['POST'])
def write():
    name = request.form.get('hostname')  
    # form > input태그에 입력한 name="hostname" 값을 연결
    text_area = request.form.get('guestbooktextarea')
    # form > textarea태그에 입력한 name="guestbooktextarea" 값을 연결
    mongo.db['wedding__two'].insert_one({
    "name": name,
    "textarea": text_area
    })
    return redirect ('/')

@app.route('/')
def index():
    nowday = datetime.date.today()
    weddingday = datetime.date(2023, 5, 19)
    calc = (weddingday - nowday).days

    guestbookImportInput = mongo.db['wedding__two'].find()
    return render_template("index.html", calc = calc, guestbookImportInput = guestbookImportInput)
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port='81')