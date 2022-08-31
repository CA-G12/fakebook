const connection = require('../../config/connection');

const deletePostQuery = (postID) => {
  const sql = {
    text: 'DELETE FROM posts WHERE id = ($1)',
    values: [postID],
  };
  return connection.query(sql);
};

module.exports = deletePostQuery;
