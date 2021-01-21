import React, { useEffect, useState } from 'react';
import useAbility from './hooks/useAbility'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10) //limit começa com 10
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  const [abilities, setPokeUrl] = useAbility();

  //UseEffect: Como se fosse o componentDidMount/componentDidUpdate e outros.
  //O useEffet trabalha alinhado com o useState
  //Primeiro parâmetro: uma callback
  //Segundo parâmetro: é uma variável DO ESTADO, que toda vez que for atualizada, o useEffet será rodado novamente.
  useEffect(async () => {
    //desestruturação pra pegar apenas a chave results
    const { results } = await fetch(url).then(response => response.json());
    setPokemons(results)
  }, [limit])

  const handleMorePokemons = () => {
    setLimit(limit + 10);
  }

  return (
    <div>
      <h1>{abilities.toString()}</h1>
      <button type="button" onClick={handleMorePokemons}>Buscar mais pokemons</button>
      <ul>
        {
          pokemons.map(({name,url}) => <li key={name} onClick={()=> setPokeUrl(url)}>{name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;