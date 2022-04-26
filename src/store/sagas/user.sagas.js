import { call, all, takeLatest, put } from 'redux-saga/effects';
import { 
    getUserInfoSuccess,
    getUserInfoFailure,
    getVotingStatsFailure,
    getVotingStatsSuccess,
    editProfileInfoFailure,
    editProfileInfoSuccess
} from '../actions/user/user.actions';
import { getUserInfoEndpoint, getVotingStatsEndpoint} from '../../services/endpoints/user.endpoints';
import { UserTypes } from '../actions/user/user.types';
import { editProfileEndpoint } from '../../services/endpoints/user.endpoints';


function* getUserInfoWorker() {
    try {
        const { data } = yield call(getUserInfoEndpoint);
        yield put(getUserInfoSuccess(data.data));
    } catch (error) {
        yield put(getUserInfoFailure(error.message));
    }
}

function* getVotingStatsWorker() {
    try {
        const { data } = yield call(getVotingStatsEndpoint);
        yield put(getVotingStatsSuccess(data.data));
    } catch (error) {
        yield put(getVotingStatsFailure(error.message));
    }
}

function* editProfileInfoWorker(action){
    const body = action.payload;
    try{
        const { data } = yield call(editProfileEndpoint, body);
        yield put(editProfileInfoSuccess(data.data))
    } catch (error) {
        yield put(editProfileInfoFailure(error.message));
    }
}

export function* userSaga() {
    yield all([
        takeLatest(UserTypes.GET_USER_INFO_REQUEST, getUserInfoWorker),
        takeLatest(UserTypes.GET_VOTING_STATS_REQUEST, getVotingStatsWorker),
        takeLatest(UserTypes.EDIT_PROFILE_REQUEST, editProfileInfoWorker)
    ]);
}
