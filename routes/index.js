const express = require('express');
const router = express.Router();
const usersRoute = require('./users');
const authRoute = require('./auth');
const checkoutRouter = require('./checkout');

//========== Routes =================
router.use('/users', usersRoute);
router.use('/auth', authRoute);
router.use('/checkout',checkoutRouter);
//===================================

module.exports = router;