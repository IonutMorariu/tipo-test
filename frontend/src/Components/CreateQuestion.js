import React, { useState } from 'react';
import { FormGroup, InputGroup, RadioGroup, Radio, H3, Button } from '@blueprintjs/core';

import { endpoint } from '../Utils/Request';

const CreateQuestion = (props) => {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('verdad');
	const [loading, setLoading] = useState(false);
	const handleQuestionSubmit = async (ev) => {
		ev.preventDefault();
		console.log({ question, answer });
		setLoading(true);
		const res = await fetch(`${endpoint}/create-question`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ question, answer, type: 'VOF' }),
		});
		setLoading(false);
		setQuestion('');
	};

	return (
		<form onSubmit={handleQuestionSubmit}>
			<H3>Guardar una pregunta</H3>
			<FormGroup disabled={loading} label="Pregunta" labelFor="question" labelInfo="(required)">
				<InputGroup
					onChange={(ev) => {
						setQuestion(ev.target.value);
					}}
					value={question}
					required
					autocomplete="off"
					id="question"
					placeholder="Escribe la pregunta"
				/>
			</FormGroup>
			<RadioGroup
				disabled={loading}
				label="Respuesta"
				onChange={(ev) => {
					setAnswer(ev.target.value);
				}}
				selectedValue={answer}
			>
				<Radio label="Verdadero" value="verdad" />
				<Radio label="Falso" value="falso" />
			</RadioGroup>
			<Button disabled={loading} type="submit" icon="floppy-disk" text={loading ? 'Guardando' : 'Guardar'} />
		</form>
	);
};
export default CreateQuestion;
