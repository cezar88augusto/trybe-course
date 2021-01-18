import React from 'react';
import MyContext from './MyContext'

class Daughter extends React.Component {

    render() {
        return (
            <div>
                <h4>
                    Filha:
                </h4>
                <MyContext.Consumer>
                    {
                        value => (
                            <div>
                                <p>
                                    {`Eu tenho ${value.money} pra gastar`}
                                </p>
                                <button onClick={value.spendMoney}>
                                  Gastar 100
                                </button>
                            </div>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}

export default Daughter;