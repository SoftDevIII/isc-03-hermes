CREATE TABLE IF NOT EXISTS test(
  id_test INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO test (name) VALUES ('Hello World from MySql!');