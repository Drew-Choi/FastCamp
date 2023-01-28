from flask import Flask, render_template, jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('hello_world.html')

@app.route('/fc')
def fastcampus():
    res = []
    for i in range(10):
        res.append(
            {"title": str(i) + " title"}
        )
    return jsonify(res)

if __name__ == '__main__':
    app.run()