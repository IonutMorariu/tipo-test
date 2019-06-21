import React, { Component } from 'react';
import { Spinner, Button, Callout, Intent } from '@blueprintjs/core';

import SingleQuestion from './SingleQuestion';
import { endpoint } from '../Utils/Request';

export class Exam extends Component {
	state = {
		questionState: 0,
	};

	componentDidMount = () => {
		this.getRandomQuestion();
	};

	handleAnswer = (answer) => {
		if (this.state.question) {
			if (answer === this.state.question.answer) {
				this.setState({ questionState: 2 });
			} else {
				this.setState({ questionState: 1 });
			}
		}
	};

	handleNextQuestion = () => {
		this.getRandomQuestion();
	};

	getRandomQuestion = async () => {
		const res = await fetch(`${endpoint}/random-question`);
		const question = await res.json();

		console.log(question);
		this.setState({ question, questionState: 0 });
	};

	render() {
		const { questionState, question } = this.state;

		switch (questionState) {
			case 0:
				return (
					<div>
						{question ? <SingleQuestion answer={this.handleAnswer} question={this.state.question} /> : <Spinner />}
					</div>
				);
				break;
			case 1:
				return (
					<Callout icon="error" intent={Intent.DANGER} title="Respuesta Erronea">
						<p>
							{question.question} || {question.answer}
						</p>
						<Button onClick={this.handleNextQuestion} text="Siguiente pregunta" />
					</Callout>
				);
				break;
			case 2:
				return (
					<Callout title="Respuesta Correcta" icon="tick" intent={Intent.SUCCESS}>
						<p>
							{question.question} || {question.answer}
						</p>
						<Button onClick={this.handleNextQuestion} text="Siguiente pregunta" />
					</Callout>
				);
			default:
				break;
		}
	}
}

export default Exam;
