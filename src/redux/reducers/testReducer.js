import types from '../actionTypes'

function handleTestActions (state, action) {
  switch (action.type) {
    case types.ACTIONS.REQUEST_ACTION_TEST:
      return {
        data: "test_data",
      }
    case types.ACTIONS.RECEIVE_ACTION_TEST:
      const data = action.data
      return {
        data,
      }
   default:
      return state
  }
}

function testReducer (state = {}, action) {
  return Object.assign({}, state, handleTestActions(state, action))
}

export default testReducer
