import React from 'react';
import PokemonCard from './PokemonCard';

// const pokemonList = ['pikachu', 'squirtle', 'mewto'];

export default class PokemonFetcher extends React.Component {

    constructor(props){
        // super is React.Component
        super(props);

        this.state = {
            pokemonList: ['pikachu', 'squirtle', 'mewto']
        }
    }

    render(){
        return (
            <div>
                <h1>Pokemon Data</h1>
                {this.state.pokemonList.map(pokemon => {
                    return <PokemonCard name={pokemon} />
                })}
                <button onClick={() => {
                    this.setState({pokemonList: []});
                }}>
                    Empty the state
                </button>
            </div>
        );
    };
}