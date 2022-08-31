const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { signInQuery } = require('../../database/queries');
const signInValidate = require('../../validation/sign-in-validate');

const signIn = (req, res, next) => {
  const { email, password } = req.body;
  const { error, value } = signInValidate.validate(req.body);

  if (error) {
    res.sendStatus(401);
  } else {
    signInQuery(email).then((data) => {
      if (data.rows.length !== 0) {
        const {
          hashedpassword,
          id,
          name,
          img,
        } = data.rows[0];

        bcrypt.compare(password, hashedpassword, (err, result) => {
          if (err) next(err);
          if (!result) res.status(200).json({ message: 'invalid Input' });
          else {
            const token = jwt.sign({
              id,
              name,
              email,
              img,
            }, process.env.SECRET);
            res.cookie('token', token, { httpOnly: true }).json({message: 'successful'});
          }
        });
      } else {
        res.status(401).json({ message: 'invalid Input' });
      }
    });
  }
};

module.exports = signIn;
