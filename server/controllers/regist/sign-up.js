const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET;

const { signUpQuery } = require('../../database/queries');
const signUpSchema = require('../../validation/sign-up-validate');

const signUp = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;

  const { error, value } = signUpSchema.validate(req.body);

  if (!error) {
    bcrypt.hash(password, 10)
      .then((hashed) => signUpQuery([name, email, hashed]))
      .then((data) => {
        const { id, img } = data.rows[0];

        jwt.sign({ id, name, email, img }, secretKey, { expiresIn: '1h' }, (err, token) => {
          if (err) next(err);
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
