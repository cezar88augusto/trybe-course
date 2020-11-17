import React from 'react';
import './App.css';
//No React, há o conceito de components. Dentro dos componentes DEVE estar todas as funções.
class App extends React.Component {
  //O construtor faz parte da lógica interna do React. Esta classe, pega esta lógica quando utiliza o "extends".
  //Função construto herdada:
  constructor() {
    //Para sobreescrever a lógica do construtor DO REACT, utiliza-se o "SUPER()";
    super()
    console.log('Componente sendo construído');
    //Para que o this dentro da função handleCLick seja vista, deve-se fazer isto: 
    this.handleClick = this.handleClick.bind(this);
    //"Esta função handleCLick está ligada ao this."
  }
  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
  Com isso, podemos acessar as `props`, estado do componente
  e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }
  render() {
    console.log(this);
    return <button onClick={this.handleClick}>Botão</button>
  }
}

export default App;
