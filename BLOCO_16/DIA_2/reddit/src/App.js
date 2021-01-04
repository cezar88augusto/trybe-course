import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import List from './pages/List';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/lista" component={List} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
