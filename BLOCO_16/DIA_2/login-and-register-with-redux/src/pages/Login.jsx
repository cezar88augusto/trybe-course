import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    login() {
        const { change, login } = this.props;
        const { authorizedPersonnel } = login;
        console.log(login);
        const { email, password } = this.state;
        const authorized = authorizedPersonnel.find((person) => person.email === email);
        if ((authorized !== undefined) && (authorized.password === password)) {
            change(true);
        }
    }
    render() {
        const { loggedIn } = this.props.login;
        if (loggedIn) return (<Redirect to="/cadastro" />);
        return (
            <div>
                <header>Login</header>
                <div className="Form">
                    <fieldset>
                        <div className="Login">
                            <div className="email">
                                <label htmlFor="email" />
                                    E-mail:
                                <input
                                    name="email"
                                    type="email"
                                    onChange={this.handleChange}
                                    pattern="[A-Za-z0-9._-]+@[a-z0-9.-]+.[a-z]"
                                    required="required"
                                />
                            </div>
                            <div className="password">
                                <label htmlFor="password" />
                                    Password:
                            <input
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                required="required"
                            />
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="login-button">
                    <button
                        type="button"
                        onClick={this.login}
                    >Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
    change: (bool) => dispatch(login(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
