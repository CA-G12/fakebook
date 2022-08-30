const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { signInQuery } = require('../../database/queries');
const { signInValidate } = require('../../validation/sign-in-validate');

const signIn = (req, res, next) => {
  const {
    id,
    name,
    email,
    password,
    img,
  } = req.body;
  const { error, value } = signInValidate().validate(req.body);
  if (error) {
    res.sendStatus(401);
  } else {
    signInQuery(email)
      .then((data) => {
        if (data.rows.length !== 0) {
          const { hashedPassword } = data.rows[0];
          return bcrypt.compare(password, hashedPassword);
        }
        return res.sendStatus(401).json({ message: 'invalid Input' });
      })
      .then((result) => {
        if (!result) res.sendStatus(200).json({ message: 'invalid Input' });
        const token = jwt.sign({
          id,
          name,
          email,
          img,
        }, process.env.SECRET);
        res.cookie('token', token).redirect('/feed');
      })
      .catch((err) => next(err));
    res.json(value);
  }
};

module.exports = signIn;
