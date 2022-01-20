const express = require('express');
const router = express.Router();
const webhooksController = require('../controllers/webhooksController');

router.post('/stripe', express.raw({type: 'application/json'}),webhooksController.stripeWebhook);

module.exports = router;