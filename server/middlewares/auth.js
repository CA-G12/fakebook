const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const userAuthenticator = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).redirect('/');
  } else {
    jwt.verify(token, SECRET, (err, encoded) => {
      if (err) {
        res.status(401).redirect('/');
      } else {
        next();
      }
    });
  }
};

module.exports = userAuthenticator;
