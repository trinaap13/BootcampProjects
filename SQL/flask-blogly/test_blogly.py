from unittest import TestCase
from flask import Flask
from app import app
from models import db, User, connect_db


class UserModelTestCase(TestCase):
    SQLALCHEMY_DATABASE_URI = "postgresql:///blogly"

    connect_db(app)

    def setUp(self):
        with app.app_context():
            db.create_all()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_add_user(self):
        with app.test_client() as client:
            response = client.post('/users/new', data={
                'first_name': 'Jane',
                'last_name': 'Doe',
                'image_url': 'https://png.pngtree.com/element_our/sm/20180524/sm_5b072d393d61e.jpg'
            }, follow_redirects=True)
            html = response.get_data(as_text=True)

        self.assertEqual(response.status_code, 200)
        self.assertIn('Jane Doe', html)

    def test_user_detail(self):
        user = User(first_name='Jane', last_name='Doe', image_url='https://png.pngtree.com/element_our/sm/20180524/sm_5b072d393d61e.jpg')
        with app.app_context():
            db.session.add(user)
            db.session.commit()

        with app.test_client() as client:
            detail_page_response = client.get('/users/1')
            html = detail_page_response.get_data(as_text=True)

        self.assertEqual(detail_page_response.status_code, 200)
        self.assertIn('Jane Doe', html)

    def test_user_delete(self):
        with app.test_client() as client:
            response = client.post('/users/new', data={
                'first_name': 'Jane',
                'last_name': 'Doe',
                'image_url': 'https://png.pngtree.com/element_our/sm/20180524/sm_5b072d393d61e.jpg'
            }, follow_redirects=True)
            html = response.get_data(as_text=True)

        self.assertEqual(response.status_code, 200)
        self.assertIn('Jane Doe', html)

        with app.test_client() as client:
            delete_page_response = client.post('/users/1/delete', follow_redirects=True)
            html = delete_page_response.get_data(as_text=True)

        self.assertEqual(delete_page_response.status_code, 200)
        self.assertNotIn('Jane Doe', html)

    def test_user_list(self):
        user1 = User(first_name='Jane', last_name='Doe', image_url='https://png.pngtree.com/element_our/sm/20180524/sm_5b072d393d61e.jpg')
        user2 = User(first_name='John', last_name='Doe')

        with app.app_context():
            db.session.add(user1)
            db.session.add(user2)
            db.session.commit()

        with app.test_client() as client:
            response = client.get('/users', follow_redirects=True)
            html = response.get_data(as_text=True)

        self.assertIn('Jane Doe', html)
        self.assertIn('John Doe', html)


        

