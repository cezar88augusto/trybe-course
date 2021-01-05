// src/store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

/* export function fetchDogAction() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
} */

export function fetchDogAction() {
  return async (dispatch) => {
    try {
      // Dispatch request action here
      // \/
      dispatch(requestDog())
      const dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogJson = await dogResponse.json();
      //Atualizar o estado com o Redux, é com o DISPATCH.
      // Dispatch received data action here
      // \/
      return dispatch(getImage(dogJson));
    } catch (error) {
      //Atualizar o estado com o Redux, é com o DISPATCH.
      return dispatch(failedRequest(error))
    }
  }
}


//ESTAS INFORMAÇÕES, ESTÃO SENDO COLOCADAS INICIALMENTE NAS PROPS!!!!!!
const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      console.log(action.type);
      console.log(state);
      return { ...state, isFetching: true };
    case GET_IMAGE:
      console.log(action.type);
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      console.log(action.type);
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;