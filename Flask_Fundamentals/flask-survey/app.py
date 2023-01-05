from flask import Flask, redirect, session, request, render_template, flash
from surveys import satisfaction_survey
from flask_debugtoolbar import DebugToolbarExtension

RESPONSES_KEY = "responses"

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret_key"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


@app.route("/")
def show_survey_start():
    return render_template("start.html", survey=satisfaction_survey)


@app.route("/questions/<int:id>")
def questions(id):
    response = session.get(RESPONSES_KEY)
    question = satisfaction_survey.questions[id]

    if (len(response) != id):
        flash(f"Cannot access question.")
        return redirect(f"/questions/{len(response)}")

    if (response is None):
        return redirect("/")

    if (len(response) == len(satisfaction_survey.questions)):
        return redirect("/completed")

    return render_template(
        "questions.html", question=question)


@app.route("/start", methods=["POST"])
def start_survey():
    session[RESPONSES_KEY] = []

    return redirect("/questions/0")


@app.route("/answer", methods=["POST"])
def handle_questions():
    answer = request.form['answer']

    response = session[RESPONSES_KEY]
    response.append(answer)
    session[RESPONSES_KEY] = response

    if (len(response) == len(satisfaction_survey.questions)):
        return redirect("/completed")
    else:
        return redirect(f"/questions/{len(response)}")


@app.route("/completed")
def completed():
    return render_template("complete.html")
