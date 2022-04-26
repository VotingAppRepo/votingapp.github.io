import { all } from 'redux-saga/effects';
import { adminSaga } from './admin.sagas';
import { authorizationSaga } from './auth.sagas';
import { votingSaga } from './voting.sagas';
import { userSaga } from './user.sagas';

export default function* rootSaga() {
    yield all([
        authorizationSaga(),
        adminSaga(),
        votingSaga(),
        userSaga()
    ]);
}
