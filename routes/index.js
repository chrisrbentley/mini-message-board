const express = require('express');
const Message = require('../models/messages');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

/* GET home page. */
router.get('/', messagesController.getMessages);

module.exports = router;
