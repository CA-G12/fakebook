const { Router } = require('express');
const { feed, profile } = require('../controllers');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/user/profile', auth, profile);
router.get('/user/feed', feed);


module.exports = router;
