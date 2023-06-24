DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE medical_centers (
    id SERIAL PRIMARY KEY,
    name TEXT,
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name TEXT,
    hospital TEXT REFERENCES medical_centers
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE doctors_patients (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER REFERENCES doctors ON DELETE CASCADE,
    patient_id INTEGER REFERENCES patients ON DELETE CASCADE
);

CREATE TABLE disease (
    id SERIAL PRIMARY KEY,
    disease_name TEXT,
    patient_id INTEGER REFERENCES patient
);