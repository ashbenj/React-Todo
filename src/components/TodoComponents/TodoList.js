//Toggle Component Goes Here
//GroceryList
import React from 'react';
import Item from './Item';

const TodoList = props => {
	return (
		<div className='mom-life'>
			{props.tasks.map(item => {
				return <Item item={item} key={item.id} toggleItem={props.toggleItem} />;
			})}
		</div>
	);
};

export default TodoList;
