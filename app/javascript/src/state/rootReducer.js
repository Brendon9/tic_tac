import { combineReducers } from 'redux'
import { merge } from 'lodash'

import tilesReducer from './tiles/reducer'
import boardReducer from './board/reducer'
import scoreReducer from './score/reducer'
import { API_DATA_REQUEST, API_DATA_SUCCESS, API_DATA_FAILURE } from './action-types'


const initialState = {
  meta: {}
}

const data = (state = initialState, action) => {
  switch (action.type) {

    case API_DATA_SUCCESS:
      return merge({}, state, merge({}, action.response, { meta: { [action.endpoint]: { loading: false } } }))

    case API_DATA_REQUEST:
      return merge({}, state, { meta: { [action.endpoint]: { loading: true } } })

    case API_DATA_FAILURE:
      return merge({}, state, merge({}, action.message, { meta: { [action.endpoint]: { error: true } } }))

    default:
      return state
  }
}

export default combineReducers({
  data,
  board: boardReducer,
  tiles: tilesReducer,
  score: scoreReducer
})
