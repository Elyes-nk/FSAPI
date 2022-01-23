const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const authRouter = require('./auth');
const checkoutRouter = require('./checkout');
const webHooksRouter = require('./webhooks');
const orderRouter = require('./order')

//========== Routes =================
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/checkout',checkoutRouter);
router.use('/webhooks',webHooksRouter);
router.use('/order',orderRouter)
//===================================

module.exports = router;