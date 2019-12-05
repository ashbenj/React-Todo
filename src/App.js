//Index
import React from 'react';
import ReactDOM from 'react-dom';

import { tasks } from '../src/components/TodoComponents/Todo';
import '../src/components/TodoComponents/Todo.css';

import TodoList from './components/TodoComponents/TodoList';

const App = props => {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	console.log('rendering...');
	return (
		<div className='App'>
			<div className='header'>
				<h2>Mom Life Tasks</h2>
			</div>
			<TodoList tasks={tasks} />
		</div>
	);
};

export default App;
