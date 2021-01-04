import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addClient } from '../actions/loginActions'

class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            email: '',
            birthdate: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    render() {
        const { addClient } = this.props;
        return (
            <div>
                <h1>Tela de Cadastro</h1>
                <Link to="/lista" > Lista </Link>
                <div>
                    <label htmlFor="name">Nome</label>
                    <br />
                    <input name="name" type="text" placeholder="Digite seu nome"
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="birthdate">Data de Nascimento</label>
                    <br />
                    <input name="birthdate" type="date" placeholder="Digite sua idade"
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input name="email" type="email" placeholder="Digite seu email"
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <br />
                    <input name="password" type="password" placeholder="Digite sua password"
                        onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={() => addClient(this.state)}>Cadastrar</button>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addClient: (client) => dispatch(addClient(client))
})

export default connect(null, mapDispatchToProps)(Cadastro);
