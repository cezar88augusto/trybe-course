const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
}

fetchJoke();
//window.onload = () => fetchJoke();