# AWS 주소: http://43.201.147.8/

import os
from flask_pymongo import PyMongo
from flask import Flask, render_template, request, redirect, jsonify
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/local'
mongo = PyMongo(app)

product_db = mongo.db.dangdang

@app.route('/detail')
def detail():
    productinfo = product_db.find_one({"product_name": request.args.get('product_name')})
    return jsonify({
        "product_name": productinfo.get("product_name"),
        "contenttext": productinfo.get("contenttext")
    })

@app.route('/regi_index')
def regi_index():
    return render_template('dangdangregi.html')

@app.route('/register', methods=["POST"])
def register():
    imagefiles = request.files['product__image']
    filepath = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(filepath, 'static')
    imagefiles.save(os.path.join(filepath, imagefiles.filename))
    product_db.insert_one({
        "product_name": request.form.get('pd_name'),
        "location": request.form.get('location'),
        "price": request.form.get('price'),
        "contenttext": request.form.get('contenttext'),
        "product_image": imagefiles.filename
    })
    return redirect('/')

@app.route('/')
def dangdangHome():
    productlist = mongo.db['dangdang'].find()
    return render_template('dangdang.html', productlist=productlist)
    
if __name__ == '__main__':
    app.run(host= '0.0.0.0', port= '80')