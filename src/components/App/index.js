import React from 'react';
import HomePage from '../HomePage';
import { fetchPokeList, fetchPokeDetail } from '../../services/API-call';

import './styles.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				pokemonsData: [],
				isFetching: true
			},
			filters: {
				nameValue: ''
			}
		};
	}

	componentDidMount() {
		fetchPokeList().then(data => {
			const pokeListUrls = data.results;
			pokeListUrls.map(pokemon => {
				return fetchPokeDetail(pokemon.url).then(response => {
					this.setState(prevState => {
						return {
							data: {
								pokemonsData: prevState.data.pokemonsData.concat(response),
								isFetching: false
							}
						};
					});
				});
			});
		});
	}

	handlerInputName(e) {
		const { currentTarget } = e;
		const myValue = currentTarget.value;
		console.log(myValue);
	}

	render() {
		const { pokemonsData, isFetching } = this.state.data;
		const { nameValue } = this.state.filters;
		return (
			<HomePage
				isFetching={isFetching}
				pokemonsData={pokemonsData}
				handlerInputName={this.handlerInputName}
				nameValue={nameValue}
			/>
		);
	}
}

export default App;
