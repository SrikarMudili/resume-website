from flask import Flask

# creates a Flask application, named app
app = Flask(__name__)

# a route where we will display a welcome message via an HTML template
@app.route("/resume")
def resume():
    return "Amir is very awesome"

# run the application
if __name__ == "__main__":
    app.run(debug=False)
