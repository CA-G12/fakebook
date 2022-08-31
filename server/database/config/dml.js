const { readFileSync } = require('fs');
const { join } = require('path');
const conn = require('./connection');

const dml = () => {
  const sql = readFileSync(join(__dirname, 'dmlTest.sql')).toString();

  return conn.query(sql);
};

module.exports = dml;