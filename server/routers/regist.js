const { Router } = require('express');
const { signIn, signOut, signUp } = require('../controllers');

const router = Router();

router.post('/sign-up', signUp);

module.exports = router;
