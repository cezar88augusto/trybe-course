import React from 'react';

class PasswordInput extends React.Component {

  validatePassword(value) {
    const validation = value.length >= 6;
    if(!validation && value !== '') return 'Senha inválida, deve possuir mais que 6 caracteres.'
  }

  render() {
    return(
      <div>
      <label>
        <input type="password"
              name="password"
              value={this.props.password}
              onChange={this.props.changeHandler}
              />
      </label>
      <span>{this.validatePassword(this.props.password)}</span>
    </div>
    )
  }
}

export default PasswordInput;