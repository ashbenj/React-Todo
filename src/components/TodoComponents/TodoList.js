//Toggle Component Goes Here
//GroceryList
import React from 'react';
import Item from './Item';

const TodoList = props => {
	console.log(props.tasks);
	return (
		<div className='mom-life'>
			{props.tasks.map(item => {
				return <Item item={item} key={item.id} toggleItem={props.toggleItem} />;
			})}
			<button className='clear-btn' onClick={props.clearCompleted}>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoList;
