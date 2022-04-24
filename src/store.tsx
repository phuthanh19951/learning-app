import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// Then run the saga
sagaMiddleware.run(mySaga)