// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchDogAction } from './store';

function App({ isFetching, src, fetchDog }) {
  return (
    // Se o "isFetching" lá do estado for true, renderiza o Loading, se não, renderiza o botão e a imagem
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}
//Pegando as informações do meu reducer e colocando e props
const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching
});
//Mapeando uma prop chamada fetchDog, uma action fetchDogAction
//Atualizar o estado com o Redux, é com o DISPATCH.
const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDogAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
