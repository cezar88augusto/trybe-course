import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div>
                <h1>Tela Login</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input name="email" type="email" placeholder="Digite seu email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input name="password" type="password" placeholder="Digite sua senha" />
                </div>
                <div>
                    <button>Entrar</button>
                </div>
            </div >
        )
    }
}

export default Login;
