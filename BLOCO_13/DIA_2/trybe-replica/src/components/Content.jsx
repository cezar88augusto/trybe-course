import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Solutions from '../pages/Solutions';
import Schedule from '../pages/Schedule';
import TrybeContent from '../pages/TrybeContent';
import Setup from '../pages/Setup';

class Content extends React.Component {
  render() {
    const sampleData = ['12.1', '12.2', '12.3'];

    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/solutions/:solutionId' component={Solutions} />
          <Route
            path='/solutions'
            render={props => <Solutions {...props} avaiableSolutions={sampleData} />}
          />
          <Route path='/schedule' component={Schedule} />
          <Route path='/trybe-content' component={TrybeContent} />
          <Route path='/setup' component={Setup} />
        </Switch>
      </main>
    );
  }
}

// Voltamos as 18:20

export default Content;