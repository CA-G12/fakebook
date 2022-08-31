const connection = require('../../config/connection');

const feedQuery = () =>
  connection.query('SELECT users.name, users.img, posts.post, posts.likes FROM users JOIN posts ON users.id = posts.user_id;');

module.exports = feedQuery;
