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
                        <div>
                            {client.name}
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
