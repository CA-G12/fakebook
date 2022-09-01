const { readFileSync } = require('fs');
const { join } = require('path');
const conn = require('./connection');

const build = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();

  return conn.query(sql);
};

module.exports = build;
