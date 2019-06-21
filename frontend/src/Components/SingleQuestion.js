import React from 'react';
import { Button, ButtonGroup, Card, Elevation, H3, Divider, Intent } from '@blueprintjs/core';

const SingleQuestion = ({ question, answer }) => {
	return (
		<Card elevation={Elevation.TWO}>
			<H3>Pregunta {question.number}</H3>
			<p>{question.question}</p>
			<ButtonGroup>
				<Button onClick={() => answer('verdad')} large intent={Intent.SUCCESS} text="Verdadero" />
				<Button onClick={() => answer('falso')} large intent={Intent.DANGER} text="Falso" />
			</ButtonGroup>
		</Card>
	);
};

export default SingleQuestion;
