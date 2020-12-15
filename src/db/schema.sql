CREATE DATABASE knitting_charts

\c knitting_charts

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  user_name VARCHAR(30),
  email VARCHAR(50),
  avatar VARCHAR(100)
)

CREATE TABLE charts (
  chart_id serial PRIMARY KEY,
  chart VARCHAR,
  user_id INT
  CONSTRAINT fk_user_id
    FOREIGN KEY(user_id)
	    REFERENCES users(user_id)
)