import React from 'react';
import Pokedex from './Pokedex'
import PokemonList from './data'

function App() {
  return (
    <div>
      <h1> Pokekex </h1>
      <Pokedex list={PokemonList} />
    </div>
  );
}

export default App;

