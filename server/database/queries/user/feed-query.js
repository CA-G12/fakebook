const connection = require('../../config/connection');

const feedQuery = (id) =>
  connection.query('SELECT users.name, users.img, posts.post, posts.likes, posts.id FROM users JOIN posts ON users.id = posts.user_id WHERE users.id != ($1) ORDER BY posts.id;', id);

module.exports = feedQuery;
