import { call, all, takeLatest, put } from 'redux-saga/effects';
import { 
    createNewModelFailure,
    createNewModelSuccess,
    switchUserStatusSuccess,
    switchUserStatusFailure,
    getUsersSuccess,
    getUsersFailure,
    getModelsSuccess, 
    getModelsFailure
} from '../actions/admin/admin.actions';
import { AdminTypes } from '../actions/admin/admin.types';
import { createModelEndpoint, deleteModelEndpoint, getUsersEndpoint, switchUserStatusEndpoint, getModelsEndpoint} from '../../services/endpoints/admin.endpoints';

function* modelCreateWorker(action) {
    const model = action.payload;
    try {
        const {data} = yield call(createModelEndpoint, model);
        yield put(createNewModelSuccess(data.message));
    } catch (error) {
        yield put(createNewModelFailure(error.message));
    }
}

function* modelDeleteWorker(action) {
    const modelId = action.payload;
    try {
        const {data} = yield call(deleteModelEndpoint, modelId);
        yield put(createNewModelSuccess(data.message));
    } catch (error) {
        yield put(createNewModelFailure(error.message));
    }
}

function* switchStatusWorker(action) {
    const id = action.payload;
    try {
        yield call(switchUserStatusEndpoint, id);
        yield put(switchUserStatusSuccess(id));
    } catch (error) {
        yield put(switchUserStatusFailure(error.message));
    }
}

function* getUsersWorker() {
    try {
        const {data} = yield call(getUsersEndpoint);
        yield put(getUsersSuccess(data.data));
    } catch (error) {
        yield put(getUsersFailure(error.message));
    }
}

function* getModelsWorker() {
    try {
        const {data} = yield call(getModelsEndpoint);
        yield put(getModelsSuccess(data.data));
    } catch (error) {
        yield put(getModelsFailure(error.message));
    }
}

export function* adminSaga() {
    yield all([
        takeLatest(AdminTypes.CREATE_NEW_MODEL_REQUEST, modelCreateWorker),
        takeLatest(AdminTypes.SWITCH_USER_STATUS_REQUEST, switchStatusWorker),
        takeLatest(AdminTypes.GET_USERS_REQUEST, getUsersWorker),
        takeLatest(AdminTypes.GET_MODELS_REQUEST, getModelsWorker),
        takeLatest(AdminTypes.DELETE_MODEL_REQUEST, modelDeleteWorker)
    ]);
}