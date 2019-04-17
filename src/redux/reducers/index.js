import CONSTS from '../actionTypes'
import { combineReducers } from 'redux'


//import reducers
import posts from './posts';
import comments from './comments';
import users from './users';



function errorMessage (state = {}, action) {
  const { type, error } = action

  if (type === CONSTS.ACTIONS.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.errorMessage
  }

  return state
}

const rootReducer = combineReducers({
  posts, comments, users
})

export default rootReducer
