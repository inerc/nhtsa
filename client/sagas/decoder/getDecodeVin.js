import { put, take, call, fork } from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {delay} from 'redux-saga';


function fetchApi(data) {
    return fetch(`/api/auth`, {method: 'POST', body: JSON.stringify(data), headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }, credentials: 'same-origin'
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
       let data = yield take(LOGIN_REQUEST);

        let result = yield call(fetchApi, data);
        if (result.error) {
            //
            // yield put(userFailure(result));
            // yield put (addFlashMessage("Запрос не выполнен, попробуйте еще раз", 'error'));
            // yield delay(3000);
            // yield put (deleteFlashMessage(0));

        } else {
            // yield put(userSuccess(result));
            // let pushTo =  yield call(checkSystem , result);
            // yield put(push(pushTo));
            // yield put (addFlashMessage("Вы успешно авторизировались", 'success'));
            // yield delay(3000);
            // yield put (deleteFlashMessage(0));

        }
    }
}