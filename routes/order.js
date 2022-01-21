const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/' ,orderController.getOrder);

module.exports = router;