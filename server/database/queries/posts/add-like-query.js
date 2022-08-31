const connection = require('../../config/connection');

const addLikeQuery = (id) =>
  connection.query('UPDATE posts SET likes = likes + 1 WHERE id = ($1);', id);

module.exports = addLikeQuery;
