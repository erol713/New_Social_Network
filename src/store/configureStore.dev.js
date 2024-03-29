import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../redux/reducers/index'



const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)


function configureStore (initialState) {

  

  return createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}


export default configureStore;