const signOut = (req, res) => {
  res.clearCookie('token').redirect('/');
};

module.exports = signOut;
