const { Router } = require('express');
const { feed, profile } = require('../controllers');
const auth = require('../middlewares/auth');

const router = Router();
router.get('/user/feed', auth, feed);

module.exports = router;
