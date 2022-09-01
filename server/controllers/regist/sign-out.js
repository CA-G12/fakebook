const signOut = (req, res) => {
  res.clearCookie('token').send({ message: 'redirect' });
};

module.exports = signOut;
