const express = require('express');
const router = express.Router();
const webhooksController = require('../controllers/webhooksController');
const bodyParser = require('body-parser')


router.post('/stripe', bodyParser.raw({ type: 'application/json' }),webhooksController.stripewebhook);

module.exports = router;