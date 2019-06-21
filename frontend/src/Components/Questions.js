import React, { Component } from 'react';
import { UL, HTMLTable } from '@blueprintjs/core';
import { endpoint } from '../Utils/Request';

export class Questions extends Component {
	state = {
		questions: [],
	};
	componentDidMount = async () => {
		const res = await fetch(`${endpoint}/all-questions`, {
			method: 'GET',
		});
		const data = await res.json();
		this.setState({ questions: data });
	};

	renderQuestions = () => {
		return this.state.questions.map((question) => {
			return (
				<tr key={question._id}>
					<td>{question.number}</td>
					<td>{question.question}</td>
					<td>{question.answer}</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<HTMLTable>
				<thead>
					<tr>
						<th>#</th>
						<th>Pregunta</th>
						<th>Respuesta</th>
					</tr>
				</thead>
				<tbody>{this.renderQuestions()}</tbody>
			</HTMLTable>
		);
	}
}

export default Questions;
