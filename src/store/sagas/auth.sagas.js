import { call, all, takeLatest, put } from 'redux-saga/effects';
import { Paths } from '../../services/paths';
import { loginUserFailure, 
    loginUserSuccess, 
    logoutUserFailure, 
    logoutUserSuccess, 
    registerUserSuccess, 
    registerUserFailure 
} from '../actions/auth/auth.actions';
import { AuthTypes } from '../actions/auth/auth.types';
import { loginUserEndpoint, logoutUserEndpoint, registerUserEndpoint} from '../../services/endpoints/auth.endpoints';

function* loginUserWorker(action) {
    const body = action.payload;
    try {
        const { data } = yield call(
            loginUserEndpoint,
            body,
        );
        yield localStorage.setItem('token', data.data);
        yield put(loginUserSuccess(data.role));
        yield localStorage.setItem('role', data.role);
        yield window.location.href = data.role === 'Admin' ? Paths.ADMIN : Paths.VOTE;
    } catch (error) {
        yield put(loginUserFailure(error.message));
    }
}

function* registerUserWorker(action) {
    const body = action.payload;
    try {
        const { data } = yield call(registerUserEndpoint, body);
        yield put(registerUserSuccess(data.message));
    } catch (error) {
        yield put(registerUserFailure(error.message));
    }
}

function* logoutUserWorker() {
    try {
        yield call(logoutUserEndpoint);
        yield localStorage.removeItem('token');
        yield put(logoutUserSuccess());
    } catch (error) {
        yield put(logoutUserFailure(error.message));
    }
}


export function* authorizationSaga() {
    yield all([
        takeLatest(AuthTypes.LOGIN_REQUEST, loginUserWorker),
        takeLatest(AuthTypes.LOGOUT_REQUEST, logoutUserWorker),
        takeLatest(AuthTypes.REGISTER_REQUEST, registerUserWorker),
    ]);
}
