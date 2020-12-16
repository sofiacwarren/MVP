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
  columns INT,
  user_id INT
  CONSTRAINT fk_user_id
    FOREIGN KEY(user_id)
	    REFERENCES users(user_id)
)

INSERT INTO users VALUES ("fia", "my@email.com", "https://farm3.static.flickr.com/2297/2086601342_e2827f1885.jpg?v=0");
INSERT INTO charts VALUES ("['k', 'p', 'k', 'p', 'k', 'p']", 1)