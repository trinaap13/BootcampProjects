from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):

    def setUp(self):
        self.client = app.test_client()
        app.config['TESTING'] = True


    def test_invalid_word(self):
        self.client.get('/')
        response = self.client.get('/check-word?word=Katrina')
        self.assertEqual(response.json['result'], 'not-on-board')

    def test_non_english_word(self):
        self.client.get('/')
        response = self.client.get('/check-word?word=qwerty')
        self.assertEqual(response.json['result'], 'not-word')

    def test_homepage(self):
        with self.client:
            response = self.client.get('/')
            self.assertIn('board', session)
            self.assertIsNone(session.get('highscore'))
            self.assertIsNone(session.get('num_plays'))
            self.assertIn(b'<p>High Score:', response.data)
            self.assertIn(b'Score:', response.data)
            self.assertIn(b'Seconds Left:', response.data)
    

    
