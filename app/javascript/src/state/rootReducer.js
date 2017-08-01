import { combineReducers } from 'redux'
import tilesReducer from './tiles/reducer'
import boardReducer from './board/reducer'
import scoreReducer from './score/reducer'

export default combineReducers({
  board: boardReducer,
  tiles: tilesReducer,
  score: scoreReducer
})
