import { fork } from 'redux-saga/effects';
import getDecodeVin from './decoder/getDecodeVin'

export function* rootSaga() {
    yield [
          //fork(getDecodeVin)
        ]
}