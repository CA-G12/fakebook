const connection = require('../../config/connection');

const addPostQuery = (values) =>
  connection.query('INSERT INTO posts(post, user_id) VALUES($1, $2);', values);

module.exports = addPostQuery;
