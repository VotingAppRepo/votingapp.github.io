import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { AuthReducer } from './reducers/auth.reducer';
import { AdminReducer } from './reducers/admin.reducer';
import { VotingReducer } from './reducers/voting.reducer';
import { UserReducer } from './reducers/user.reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: AuthReducer,
    admins: AdminReducer,
    voting: VotingReducer,
    users: UserReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);