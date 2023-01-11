from flask import Flask, request, render_template, jsonify, session
from boggle import Boggle

app = Flask(__name__)
app.config["SECRET_KEY"] = "bootcamp"

boggle = Boggle()


@app.route("/")
def homepage():
    game_board = boggle.make_board()
    session['board'] = game_board

    num_plays = session.get('num_plays', 0)
    highscore = session.get('highscore', 0)
    

    return render_template('base.html', num_plays=num_plays,
                            board=game_board,
                            highscore=highscore
                           )

@app.route("/check-word")
def check_word():
    word = request.args['word']
    game_board = session['board']
    response = boggle.check_valid_word(game_board, word)

    return jsonify({'result': response})


@app.route("/post-score", methods=["POST"])
def post_score():
    score = request.json['score']
    num_plays = session.get('num_plays', 0)
    highscore = session.get('highscore', 0)
    

    session['num_plays'] = num_plays + 1
    session['highscore'] = max(score, highscore)

    return jsonify(newRecord = score > highscore)
