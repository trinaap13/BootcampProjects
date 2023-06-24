DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist

CREATE TABLE regions
(
    id SERIAL PRIMARY KEY,
    region TEXT
)

CREATE TABLE categories
(
    id SERIAL PRIMARY KEY,
    category TEXT
)

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    region_id INTEGER REFERENCES regions
)

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    post_text TEXT,
    user_id INTEGER REFERENCES users,
    location_name TEXT,
    region_id INTEGER REFERENCES regions
    category_id INTEGER REFERENCES categories
)