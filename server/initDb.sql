-- Active: 1700477906003@@127.0.0.1@5432@fullstack
CREATE DATABASE fullstack;

CREATE TABLE IF NOT EXISTS users(
    user_id TEXT
    name VARCHAR
    email VARCHAR
    password VARCHAR
    country VARCHAR
    city VARCHAR
    street VARCHAR
    timestamp VARCHAR
    zip_code VARCHAR
    cell_phone VARCHAR
    payment VARCHAR
    );


SELECT 'CREATE DATABASE fullstack'

WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'fullstack')
