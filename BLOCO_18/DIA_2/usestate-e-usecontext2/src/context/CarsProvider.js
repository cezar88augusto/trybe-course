import React, { useState } from 'react';
import CarsContext from './CarsContext'

const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const context = { cars, moveCar };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;