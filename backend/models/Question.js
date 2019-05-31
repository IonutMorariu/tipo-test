const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	question: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'VOF',
	},
	answer: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Question', QuestionSchema);
