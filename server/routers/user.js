const { Router } = require('express');
const { feed, profile } = require('../controllers');
const auth = require('../middlewares/auth');

const router = Router();
router.get('/user/feed', auth, feed);

router.get('/user/profile', profile);
router.get('/user/feed', feed);

module.exports = router;
