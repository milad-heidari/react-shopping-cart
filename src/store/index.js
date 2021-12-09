import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import makeSagaMiddleware from 'redux-saga'
import sagaApi from './saga'

const sagaMiddleware = makeSagaMiddleware()


const store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagaApi)

export default store;