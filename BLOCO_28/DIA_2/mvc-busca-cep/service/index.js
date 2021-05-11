const fetch = require('node-fetch');
const CEP_LA_API = 'http://cep.la';
const headers = {
  Accept: 'application/json',
};

isCepValid = (cep) => {
    console.log(cep);
    const regex = /^\d{5}-\d{3}$/;
    console.log(regex.test(cep));
    return regex.test(cep)
};

const findCEPinAPI = async (cep) => {
  if (!isCepValid(cep)) return false;
  const response = await fetch(`${CEP_LA_API}/${cep}`, { headers });
  const cepData = await response.json();
  return cepData;
};

module.exports = { findCEPinAPI };
