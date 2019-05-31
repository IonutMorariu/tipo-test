const mongoose = require('mongoose');
const Question = mongoose.model('Question');

module.exports.createQuestion = async (req, res) => {
	const { question, type, answer } = req.body;
	const newQuestion = new Question({
		question,
		type,
		answer,
	});

	const response = await newQuestion.save();
	if (response) {
		res.status(200).send('Question saved!');
	} else {
		res.status(400).send('Try again');
	}
};

module.exports.getAllQuestions = async (req, res) => {
	const allQuestions = await Question.find({});
	res.json(allQuestions);
};

module.exports.getRandomQuestion = async (req, res) => {
	const allQuestions = await Question.find({});
	const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
	res.json(randomQuestion);
};
