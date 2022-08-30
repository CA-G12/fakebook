BEGIN;
DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    img VARCHAR(500) DEFAULT 'https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg'
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post TEXT NOT NULL,
    likes INT DEFAULT 0,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

  INSERT INTO users (name, email, password) values 
('Mohammad', 'Mohammad2000@gmail.com', 'MohammadPassword' ),
 ('Alan' ,  'Alan2000@gmail.com', 'AlanPassword'),
 ('Ahmed',  'Ahmed2000@gmail.com', 'AhmedPassword'),
 ('Majd',  'Majd2000@gmail.com', 'MajdPassword');

   INSERT INTO posts (post, likes, user_id) values 
('MohammadHi', 10, 1 ),
 ('AhmedHi',  30, 3),
 ('AlanHi' ,  20, 2),
 ('MajdHi',  40, 4);


COMMIT;