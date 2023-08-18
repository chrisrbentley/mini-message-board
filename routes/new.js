const express = require('express');
const router = express.Router();
const Message = require('../models/messages');
const messagesController = require('../controllers/messagesController');

/* GET new page. */
router.get('/', messagesController.getNewForm);

/* router.post('/', (req, res, next) => {
	const createMessage = (text, user, added) => {
		const messageDetail = { text: text, user: user, added: added };
		const message = new Message(messageDetail);

		message.save();
	};
	createMessage(req.body.message, req.body.user, new Date());

	res.redirect('/');
}); */

router.post('/', messagesController.createMessage);

module.exports = router;
