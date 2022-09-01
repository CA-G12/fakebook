BEGIN;

INSERT INTO users(name, email, password) VALUES ('tariq', 'testbdf@gmail.com', 'testpass');

INSERT INTO posts(post, likes, user_id) VALUES ('new test post', 34, 1), ('new test post2', 32, 1);

COMMIT;