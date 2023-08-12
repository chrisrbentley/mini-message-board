const express = require('express');
const router = express.Router();

const messages = [
	{ text: 'Hi there', user: 'Amanda', added: new Date().toDateString() },
	{ text: 'Hello World!', user: 'Charles', added: new Date().toDateString() },
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
	messages.push({
		text: req.body.message,
		user: req.body.user,
		added: new Date().toDateString(),
	});
	res.redirect('/');
});

module.exports = router;
