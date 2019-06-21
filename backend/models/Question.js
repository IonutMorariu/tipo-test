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
	number: {
		type: Number,
		default: 0,
	},
});

QuestionSchema.pre('save', function(next) {
	mongoose
		.model('Question')
		.find({})
		.then((questions) => {
			if (questions.length > 0) {
				this.number = questions.length;
			}
			next();
		});
});

module.exports = mongoose.model('Question', QuestionSchema);
