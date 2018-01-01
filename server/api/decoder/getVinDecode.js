import request from 'request';
import config from '../../config';

export const getDecode = (req, res, next) => {
    let {user_id, section_id, } = req.body;

    request.get('https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/5UXWX7C5%2ABA', {
        qs: { format: 'json', modelyear: '2011' }

    }, (err, apiRes) => {
        if (err !== null) {
            res.status(500);
            res.send(JSON.stringify({}));
            next();
            return;
        }
        let response = JSON.parse(apiRes.body);
        res.setHeader('Content-Type', 'application/json');
        res.status(apiRes.statusCode);
        if (apiRes.statusCode !== 200) {
            res.end();
            return;
        }
        res.send(JSON.stringify(response));
        res.end();
    });
};