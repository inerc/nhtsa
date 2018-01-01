import {getDecode} from './decoder/getVinDecode';

module.exports = (app) => {
    app.post('/vin/decode', getDecode);
};