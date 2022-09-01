const { readFileSync } = require('fs');
const { join } = require('path');
const conn = require('./connection');

const build = () => {
  const sql1 = readFileSync(join(__dirname, 'build.sql')).toString();
  const sql2 = readFileSync(join(__dirname, 'dmlTest.sql')).toString();

  return conn.query(sql1 + sql2);
};

module.exports = build;
