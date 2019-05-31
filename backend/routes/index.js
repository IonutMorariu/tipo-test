const express = require('express');
const router = express.Router();

const questionController = require('../controllers/questionController');

router.get('/', (req, res) => {
	res.send('Get your questions from /random-question or /all-questions');
});

router.post('/create-question', questionController.createQuestion);

router.get('/all-questions', questionController.getAllQuestions);

router.get('/random-question', questionController.getRandomQuestion);

module.exports = router;
