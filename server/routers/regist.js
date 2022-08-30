const { Router } = require('express');
const { signIn, signOut, signUp } = require('../controllers');

const router = Router();

router.get('/test3', (req, res) => {
  res.send('hello3');
});

module.exports = router;
