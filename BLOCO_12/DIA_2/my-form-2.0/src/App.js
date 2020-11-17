import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      cidade: '',
      estado: '',
      residencia: '',
      curriculo: '',
      cargo: '',
      data: '',
    }
  }


  changeHandler = event => {
    let { name, value } = event.target;
    if (name === 'nome') {
      this.setState({ nome: value.toUpperCase() })
    }
    if (name === 'email') {
      this.setState({ email: value.toLowerCase() })
    }
  }


  render() {
    return (
      <div>
        <header>
          <h1>Cadastro de Currículo</h1>
        </header>
        <form>
          <fieldset>
            <div>
              <label for="">Nome</label>
              <input type="text" required="required" name="nome" id="name" value={this.state.nome} onChange={this.changeHandler} />
            </div>
            <div>
              <label for="">Email</label>
              <input type="email" placeholder="Digite seu email:" id="emailID" required="required" name="email" value={this.state.email} onChange={this.changeHandler} />
              <p id="validator"></p>
            </div>
            <div>
              <label for="">CPF</label>
              <input type="text" required="required" name="CPF" />
            </div>
            <div>
              <label for="">Cidade</label>
              <input type="text" maxLength="28" name="cidade" />
            </div>
            <div>
              <label for="">Estado</label>
              <select name="combobox" id="combobox" required="required">Selecione</select>
            </div>
            <div>
              <p>Tipo de Residência</p>
              <div>
                <input type="radio" name="residencia" id="exampleRadios1" value="option1" checked />
                <label for="exampleRadios1">Casa</label>
              </div>
              <div>
                <input type="radio" name="residencia" id="exampleRadios2" value="option2" />
                <label for="exampleRadios2">Apto</label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label for="">Resumo do currículo</label>
              <textarea name="" id="curriculo" cols="30" rows="3" maxLength="1000" required="required"></textarea>
            </div>
            <div>
              <label for="">Descrição do cargo</label>
              <input type="text" required="required" name="cargo" />
            </div>
            <div>
              <label for="">Dia</label>
              <input type="date" required="required" name="data" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
