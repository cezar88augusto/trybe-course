import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const array = this.props.list;
        return (
            <div className="pokedex">
                {array.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;