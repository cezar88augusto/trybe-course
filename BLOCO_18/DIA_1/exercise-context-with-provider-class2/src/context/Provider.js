import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TrafficSignalContext from './TrafficSignalContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: {
        color: 'red',
      },
    }
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;

    return (
      <TrafficSignalContext.Provider value={context}>
        {children}
      </TrafficSignalContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;