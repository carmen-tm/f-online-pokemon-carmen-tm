import React from 'react';

import './styles.scss';
import FilterInput from '../FilterInput';

const FiltersList = props => {
	const { handlerInputName, nameValue } = props;
	return (
		<section>
			<FilterInput
				type="text"
				placeholder="Pokemon name"
				handlerInputName={handlerInputName}
				nameValue={nameValue}
			/>
		</section>
	);
};

export default FiltersList;
