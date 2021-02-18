import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import  rootSaga from './root-saga';


import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

// coge las acciones antes de que llegue al reducer
const middlewares = [
    // thunk,
    sagaMiddleware
];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

//creamos el store
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);

// un store persisitor
export const persistor = persistStore(store)

// export default {store, persistor}; 