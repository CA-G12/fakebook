const connection = require('../../config/connection');

const feedQuery = () =>
  connection.query('SELECT users.name, users.img, posts.post, posts.likes, posts.id FROM users JOIN posts ON users.id = posts.user_id ORDER BY posts.id;');

module.exports = feedQuery;
