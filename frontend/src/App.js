import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Alignment } from '@blueprintjs/core';

import './App.css';

import CreateQuestion from './Components/CreateQuestion';
import Exam from './Components/Exam';
import Questions from './Components/Questions';

import Inner from './Styles/Inner';

const App = () => {
	return (
		<Router>
			<Navbar>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading>Tipo Test</Navbar.Heading>
					<Navbar.Divider />
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT}>
					<Link to="/create-question">Crear pregunta</Link>
					<Navbar.Divider />
					<Link to="/questions">Todas las preguntas</Link>
					<Navbar.Divider />
					<Link to="/exam">Modo Examen</Link>
				</Navbar.Group>
			</Navbar>
			<Inner>
				<Route path="/create-question" component={CreateQuestion} />
				<Route path="/questions" component={Questions} />
				<Route path="/exam" component={Exam} />
			</Inner>
		</Router>
	);
};

export default App;
