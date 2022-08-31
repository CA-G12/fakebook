const express = require('express');
const jwt = require('jsonwebtoken');

const userAuthenticator = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).redirect('/');
  } else {
    next();
  }
};

module.exports = userAuthenticator;
