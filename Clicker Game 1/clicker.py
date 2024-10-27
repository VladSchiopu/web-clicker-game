from flask import Flask, render_template
import webbrowser

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('clicker.html')

def open_browser():
    webbrowser.open("http://127.0.0.1:8080/")

if __name__ == '__main__':
    open_browser()
    app.run(port=8080)
