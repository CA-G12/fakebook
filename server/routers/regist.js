const { Router } = require('express');
const { signIn, signOut, signUp } = require('../controllers');

const router = Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.get('/sign-out', signOut);

module.exports = router;
