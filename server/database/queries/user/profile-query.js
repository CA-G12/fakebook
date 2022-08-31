const connection = require('../../config/connection');

const profileQuery = (id) => connection.query('select * from posts where user_id = ($1);', [id]);

module.exports = profileQuery;
