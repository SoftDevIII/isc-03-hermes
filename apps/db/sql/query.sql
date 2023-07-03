INSERT INTO Test (name) VALUES ('Hello World from PostgreSQL');
INSERT INTO Customer ( email, password)
VALUES ('user1@example.com', 'password123');

INSERT INTO Customer ( email, password)
VALUES ('user2@example.com', 'password123');

INSERT INTO Customer ( email, password)
VALUES ('user3@example.com', 'password123');

INSERT INTO Customer ( email, password)
VALUES ('user4@example.com', 'password123');
INSERT INTO Customer (customer_name, password, email)
VALUES ('user4', 'password123', 'user4@example.com');

INSERT INTO disaster (disaster_name, duration, insertion_hour, latitude, longitude)
VALUES ('Huracan', '02:30:00', CURRENT_TIME, -17.778128, -63.182578);

INSERT INTO disaster (disaster_name, duration, insertion_hour, latitude, longitude)
VALUES ('Rain', '02:30:00', CURRENT_TIME, -17.775311,  -63.178222);

INSERT INTO disaster (disaster_name, duration, insertion_hour, latitude, longitude)
VALUES ('Rain', '02:30:00', CURRENT_TIME, -17.806216,  -63.197147);

INSERT INTO disaster (disaster_name, duration, insertion_hour, latitude, longitude)
VALUES ('Rain', '02:30:00', CURRENT_TIME, -17.774536,  -63.222005);

INSERT INTO disaster (disaster_name, duration, insertion_hour, latitude, longitude)
VALUES ('Rain', '02:30:00', CURRENT_TIME, -17.385483,  -66.276805);
