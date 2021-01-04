import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {

    render() {
        const { clientList } = this.props
        return (
            <div>
                <h1>Lista de Clientes Cadastrados</h1>
                <section>
                    {clientList.map(client => (
                        <div key={client.email}>
                            <p>Nome: {client.name} </p>
                            <p>Email: {client.email} </p>
                            <p>Nascimento: {client.birthdate} </p>
                        </div>
                    ))}
                </section>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    clientList: state.registerReducer
})

export default connect(mapStateToProps)(List);
