import React from 'react';
import HomePage from '../HomePage';
import PokemonDetailPage from '../PokemonDetailPage';

import { fetchPokeList, fetchPokeDetail } from '../../services/API-call';
import { Route, Switch } from 'react-router-dom';

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

		//Binding all my methods:
		this.handlerInputName = this.handlerInputName.bind(this);
	}

	componentDidMount() {
		fetchPokeList().then(data => {
			const pokeListUrls = data.results;

			//Improvement with PromiseAll(arrayOfPromises)
			const pokeponPromisesArr = pokeListUrls.map(pokemon =>
				fetchPokeDetail(pokemon.url)
			);
			Promise.all(pokeponPromisesArr).then(responses => {
				this.setState({
					data: {
						pokemonsData: responses.sort((a, b) => a.id - b.id)
					}
				});
			});
		});
	}

	handlerInputName(e) {
		const { currentTarget } = e;
		let { value } = currentTarget;
		// Using prevState in case having more filters in the future
		this.setState(prevState => {
			return {
				filters: {
					...prevState.filters,
					nameValue: value
				}
			};
		});
	}

	render() {
		const { pokemonsData, isFetching } = this.state.data;
		const { nameValue } = this.state.filters;
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => {
						return (
							<HomePage
								isFetching={isFetching}
								pokemonsData={pokemonsData}
								handlerInputName={this.handlerInputName}
								nameValue={nameValue}
							/>
						);
					}}
				/>
				<Route
					path="/pokemon-detail/:pokemonId"
					render={routerProps => <PokemonDetailPage />}
				/>
			</Switch>
		);
	}
}

export default App;
