const Message = require('../models/messages');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

exports.getMessages = asyncHandler(async (req, res, next) => {
	const messages = await Message.find({}).sort({ added: -1 }).exec();
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

exports.getNewForm = (req, res, next) => {
	res.render('form');
};

/* exports.createMessage = asyncHandler(async (req, res, next) => {
	const messageDetails = {
		text: req.body.message,
		user: req.body.user,
		added: new Date(),
	};

	const message = new Message(messageDetails);
	await message.save();

	res.redirect('/');
}); */

exports.createMessage = [
	body('user', 'Name must be between 2 and 15 characters.')
		.trim()
		.isLength({ min: 2, max: 15 })
		.escape(),

	body('message', 'Message must be between 5 and 100 characters.')
		.trim()
		.isLength({ min: 5, max: 100 })
		.escape(),

	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);

		const newMessage = new Message({
			text: req.body.message,
			user: req.body.user,
			added: new Date(),
		});

		if (!errors.isEmpty()) {
			const formattedErrors = {};
			errors.array().forEach((error) => {
				formattedErrors[error.path] = { msg: error.msg };
			});

			res.render('form', {
				errors: formattedErrors,
			});
			return;
		} else {
			await newMessage.save();
			res.redirect('/');
		}
	}),
];
