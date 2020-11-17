import React from 'react';
import './App.css';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  changeHandler = event => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
         <form>
           <div>
             <EmailInput email={this.state.email} changeHandler={this.changeHandler}/>
           </div>
           <div>
             <PasswordInput password={this.state.password} changeHandler={this.changeHandler} />
           </div>
         </form>
      </div>
    );
  }
}

export default App;