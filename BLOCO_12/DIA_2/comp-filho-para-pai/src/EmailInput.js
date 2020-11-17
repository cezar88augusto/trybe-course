import React from 'react';

class EmailInput extends React.Component {
  validateEmail(value) {
    const validation = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if(!validation && value !== '') {
      return 'Email inválido'
    }
    return ''
  }

  render() {
    return(
      <div>
        <label>
          <input type="email"
                name="email"
                value={this.props.email}
                onChange={this.props.changeHandler}
                />
        </label>
        <span>{this.validateEmail(this.props.email)}</span>
      </div>
    )
  }
}

export default EmailInput;