import {put, take, call, fork} from 'redux-saga/effects';
import {GET_DECODER_REQUEST, getDecoderFailure, getDecoderSuccess} from '../../actions/getDecoder'
import 'isomorphic-fetch';

function fetchApi(data) {
    return fetch(`/vin/decode`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('error!');
            }

            return response.json();
        })
        .catch(response => {
            return {error: response}
        });
}


export default function* getDecodeVin() {

    while (true) {
        let data = yield take(GET_DECODER_REQUEST);
        let result = yield call(fetchApi, data);
        if (result.error) {
            yield put(getDecoderFailure(result));

        } else {
            yield put(getDecoderSuccess(result));
        }
    }
}