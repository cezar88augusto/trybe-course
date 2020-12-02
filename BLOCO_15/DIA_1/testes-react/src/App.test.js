import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
  it('Verifica se há um input com o contéudo email e do tipo email', () => {
    //Qualquer teste que é feito, vai se dividr em três grandes etapas:
    //1ª etapa - acessar os elementos da sua tela
    //2ª etapa - interagir com ele se houver necessidade
    //3º etapa - fazer seu teste

    // Acessar os elementos da sua tela

    const { getByLabelText } = render(<App />) // este função render, me retorna os seletores através dos quais, eu vou acessar os elementos que forma renderizados na minha aplicação.
    const inputEmail = getByLabelText('Email');

    //Poderia ser assim tb:
    /*   const input = render(<App />)
      input.getByText(/learn react/i) */


    // Acessar os elementos da sua tela
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');

  });

  it('Verifica se há dois botões', () => {
    // Acessar os elementos da sua tela
    const { getAllByRole } = render(<App />)
    //getAllByRole armazenará todos os valores encontrados pelo seletor em um array.
    const button = getAllByRole('button');

    //Fazer seu teste
    expect(button.length).toBe(2);
  })

  it('Verifica se um botão ENVIAR', () => {
    // Acessar os elementos da sua tela
    const { getByTestId } = render(<App />)
    const button = getByTestId('id-send')

    //Fazer seu teste
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  })

  it('Verifica que, ao inserir um emai le clicar em "Enviar" o email aparece na tela', () => {
    // Acessar os elementos da sua tela
    const { getByTestId, getByLabelText } = render(<App />)
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');
    // Interagir com ele se houver necessidade
    //a função abaixo recebe uma função e um objeto (objeto com evento)! 

    //1º Botão
    fireEvent.change(emailInput, {target: { value: 'cezar@teste.com'}});
    //2º Botão
    fireEvent.click(sendButton);

    // Fazer seu test
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe('Valor: cezar@teste.com')
  })
})
