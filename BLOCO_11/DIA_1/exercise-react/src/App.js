/* Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app

⚠️ Substitua o nome-app pelo que você desejar para seu app ⚠️

Crie uma lista de tarefas simples seguindo os passos abaixo:
insira a função a seguir acima do seu App:

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start.
por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App.
Acesse este link e faça cada um dos exercícios em ordem, sendo o último o "Create a Component with Composition"
Bônus Por último, entenda como funciona o código deste link. Adicione mais dois cards com descrição e link a sua escolha.

 */

import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

function App() {
  return <div>{['a', 'b', 'c'].map((item) => task(item))}</div>;
}

export default App;
