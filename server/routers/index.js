const { Router } = require('express');
const postsRouter = require('./posts');
const userRouter = require('./user');
const registRouter = require('./regist');

const router = Router();

router.use(postsRouter);
router.use(userRouter);
router.use(registRouter);

module.exports = router;
