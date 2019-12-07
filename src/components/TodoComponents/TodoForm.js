// //ListForm
import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
	}

	changeHandler = event => {
		this.setState({ task: event.target.value });
	};

	submitHandler = event => {
		event.preventDefault();
		this.props.addItem(this.state.task);
		this.setState({ task: '' });
	};

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<input
					type='text'
					name='task'
					value={this.state.task}
					onChange={this.changeHandler}
				/>
				<button type='submit'>Add</button>
			</form>
		);
	}
}

export default TodoForm;
