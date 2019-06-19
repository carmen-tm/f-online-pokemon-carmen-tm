import React from 'react';

const FilterInput = props => {
	const { type, placeholder, handlerInputName, nameValue } = props;
	return (
		<div>
			<label htmlFor="name">Filter by name</label>
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
