const connection = require('../../config/connection');

const signInQuery = (email) => connection.query('select id, name, password AS hashedPassword, img from users where email = ($1);', [email]);

module.exports = signInQuery;
