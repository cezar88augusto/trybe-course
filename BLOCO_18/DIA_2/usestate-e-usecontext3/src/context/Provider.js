import React, { useState } from 'react';
import CarsContext from './CarsContext';

const CarsProvider = ({ children }) => {

  const [cars, setCars] = useState({
    cars: {
      red: false,
      blue: false,
      yellow: false,
    }
  });

  const [signals, setColors] = useState({
    color: 'red',
  });

  const moveCar = (car, side) => {
    setCars(
      {
        ...cars,
        [car]: side,
      },
    );
  };

  const changeSignal = (signalColor) => {
    setColors({
      ...signals,
      color: signalColor,
    });
  };

  const context = { cars, moveCar, signals, changeSignal };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
