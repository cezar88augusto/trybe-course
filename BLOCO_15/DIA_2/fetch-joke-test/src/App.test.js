// App.test.js
import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

afterEach(() => jest.clearAllMocks());
test('Verifica que, quando recebe uma piada, mostro ela na tela', async () => {
  const joke = {
    id: '7h3oGtr0fxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200
  };

  //Simulação do fetch
  const response = { json: jest.fn().mockResolvedValue(joke) };
  global.fetch = jest.fn().mockResolvedValue(response);

  //Renderizando os dados esperando os dados da linha 19 aparecerem.
  const { findByText } = render(<App />)
  await findByText('Whiteboards ... are remarkable.')
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
})