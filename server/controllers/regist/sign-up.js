const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET;

const { signUpQuery } = require('../../database/queries');
const signUpSchema = require('../../validation/sign-up-validate');

const signUp = (req, res) => {
  const {
    name, email, password,
  } = req.body;

  const { error, value } = signUpSchema.validate(req.body);

  if (!error) {
    bcrypt.hash(password, 10)
      .then((hashed) => signUpQuery([name, email, hashed]))
      .then((data) => {
        jwt.sign({ id: data.rows[0].id }, secretKey, { expiresIn: '1h' }, (err, token) => {
          res.cookie('token', token, { httpOnly: true })
            .status(200)
            .send({ message: 'welcome', data: data.rows[0], state: 'success' });
        });
      })
      .catch((err) => res.json({ message: 'email already in use', state: 'fail' }));
  } else {
    res.send({ message: error.details[0].message, state: 'fail' });
  }
};

module.exports = signUp;
