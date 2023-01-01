from flask import Flask, render_template, request
from stories import story

app = Flask(__name__)

@app.route("/")
def ask_questions():
    templates = story.templates

    return render_template("questions.html", templates=templates)


@app.route("/story")
def show_story():
    story = story.generate(request.args)

    return render_template("story.html", story=story)