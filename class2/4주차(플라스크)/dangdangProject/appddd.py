from flask_pymongo import PyMongo
from flask import Flask, render_template, request, redirect
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/local'
mongo = PyMongo(app)

@app.route('/regi_index')
def regi_index():
    return render_template('dangdangregi.html')

@app.route('/register', methods=["POST"])
def register():
    product_name = request.form.get('pd_name')
    location = request.form.get('location')
    price = request.form.get('price')
    contenttext = request.form.get('contenttext') 
    mongo.db['dangdang'].insert_one({
        "product_name": product_name,
        "location": location,
        "price": price,
        "contenttext": contenttext
    })
    return redirect('/')

@app.route('/')
def dangdangHome():
    productlist = mongo.db['dangdang'].find()
    return render_template('dangdang.html', productlist=productlist)
    
if __name__ == '__main__':
    app.run()