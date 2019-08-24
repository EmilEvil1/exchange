DROP TABLE if exists users;

CREATE TABLE users
(
    id int PRIMARY KEY AUTO_INCREMENT,
    user_email varchar(100),
    user_password varchar(200)
);

