DROP DATABASE IF EXISTS soccer_league;

CREATE DATABASE soccer_league;

\c soccer_league

CREATE TABLE teams
(
    id SERIAL PRIMARY KEY,
    team_name TEXT,
    rank INTEGER ...
)

CREATE TABLE players
(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    team_id INTEGER REFERENCES teams
)

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    home_team TEXT REFERENCES teams,
    home_team_goals INTEGER,
    away_team TEXT REFERENCES teams,
    away_team_goals INTEGER
)

CREATE TABLE referees 
(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
)

CREATE TABLE matches_referees
(
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches,
    ref_id INTEGER REFERENCES referees
)

CREATE TABLE dates 
(
    id SERIAL PRIMARY KEY,
    begin_date DATE,
    end_date DATE,
    season INTEGER
)

CREATE TABLE players_goals_match
(
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players,
    goals INTEGER,
    match_id INTEGER REFERENCES matches
)