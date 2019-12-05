import React from 'react';

const Item = props => {
	return (
		<div
			className={`item${props.item.completed ? ' completed' : ''}`}
			onClick={props.toggleItem}
		>
			onClick={e => props.toggleItem(props.item.id)}>{props.item.name}
		</div>
	);
};

export default Item;
