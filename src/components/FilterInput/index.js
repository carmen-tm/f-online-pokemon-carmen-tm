import React from 'react';

import './styles.scss';

const FilterInput = props => {
	const { type, placeholder, handlerInputName, nameValue } = props;
	return (
		<div>
			<label className="visually-hidden" htmlFor="name">
				Filter by name
			</label>
			<input
				type={type}
				placeholder={placeholder}
				onChange={handlerInputName}
				value={nameValue}
			/>
		</div>
	);
};

export default FilterInput;
