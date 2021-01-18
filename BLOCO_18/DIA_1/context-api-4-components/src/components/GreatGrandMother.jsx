import React from 'react';
import GrandMother from './GrandMother'
import MyContext from './MyContext'

class GreatGrandMother extends React.Component {
    constructor(props){
        super(props)
        this.state={
            money: 100000
        }
        this.handleSpendMoney = this.handleSpendMoney.bind(this);     
    }

    handleSpendMoney(){
        this.setState((prevState)=> ({money: prevState.money - 100}))
    }

    render(){
        const contextValue ={
            money: this.state.money,
            spendMoney: this.handleSpendMoney,
        }
        return (
            <MyContext.Provider value={contextValue}>
                <div>
                    <h1>Bisavó</h1>
                    <GrandMother></GrandMother>
                </div>
            </MyContext.Provider>
        )
    }
}

export default GreatGrandMother;