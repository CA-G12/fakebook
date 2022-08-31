const { Router } = require('express');
const { feed, profile } = require('../controllers');

const router = Router();

router.get('/user/profile', profile);
router.get('/user/feed', feed);

module.exports = router;
