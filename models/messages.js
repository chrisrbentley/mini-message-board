const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	text: { type: String, required: true, maxLength: 100 },
	user: { type: String, required: true, maxLength: 15 },
	added: { type: Date, required: true },
});

MessageSchema.virtual('formattedDate').get(function () {
	return this.added.toDateString();
});

module.exports = mongoose.model('Message', MessageSchema);
