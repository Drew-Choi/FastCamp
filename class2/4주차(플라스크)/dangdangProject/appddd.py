from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def dangdangHome():
    return render_template('dangdang.html')

@app.route('/register')
def register():
    return render_template('dangdangregi.html')

if __name__ == '__main__':
    app.run()