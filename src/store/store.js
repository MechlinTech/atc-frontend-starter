import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { customeruseReduser } from './reducers/customeruseReduser'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        customerUse: customeruseReduser
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
