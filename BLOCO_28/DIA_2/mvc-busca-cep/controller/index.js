const Address = require('../service/index');

const getAddressByCep = async (req, res) => {
    const { cep } = req.params;
    const address = await Address.findCEPinAPI(cep);
    if (!address) return res.status(404).json({ message: 'Address not found' })
    res.status(200).json(address);
};

module.exports = { getAddressByCep };