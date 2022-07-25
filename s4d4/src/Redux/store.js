import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import { reducer as appReducer } from './AppReducer/reducer';
import { reducer as authReducer } from './AuthReducer/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    appReducer, authReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))