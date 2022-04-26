import { call, all, takeLatest, put } from 'redux-saga/effects';
import { 
    getPairSuccess, 
    getPairFailure, 
    voteForModelSuccess, 
    voteForModelFailure,
    resetVotesSuccess,
    resetVotesFailure
} from '../actions/voting/voting.action';
import { VotingTypes } from '../actions/voting/voting.types';
import { voteForModelEndpoint, getPairEndpoint, resetVotesEndpoint } from '../../services/endpoints/voting.endpoints';

function* getPairWorker() {
    try {
        const { data } = yield call(getPairEndpoint);
        yield put(getPairSuccess(data.data));
    } catch (error) {
        yield put(getPairFailure(error.message));
    }
}
function* voteForModelWorker(action) {
    const body = action.payload;
    try {
        const { data } = yield call(voteForModelEndpoint,body);
        yield put(voteForModelSuccess(data.data));
    } catch (error) {
        yield put(voteForModelFailure(error.message));
    }
}

function* resetVotesWorker() {
    try {
        const { data } = yield call(resetVotesEndpoint);
        yield put(resetVotesSuccess(data.data));
    } catch (error) {
        yield put(resetVotesFailure(error.message));
    }
}


export function* votingSaga() {
    yield all([
        takeLatest(VotingTypes.VOTE_REQUEST, voteForModelWorker),
        takeLatest(VotingTypes.GET_PAIR_REQUEST, getPairWorker),
        takeLatest(VotingTypes.RESET_VOTES_REQUEST, resetVotesWorker),
    ]);
}
