import { TILE_SELECT, BOARD_LOAD } from '../action-types'

const tile = (state, action) => {
  switch(action.type) {

    case TILE_SELECT:
      if (state.id !== action.id) {
        return state
      }
      return { ...state, marking: action.marking }

    default:
      return state
  }
}

export default (state = [], action) => {
  switch(action.type) {

    case BOARD_LOAD:
      return action.tiles

    case TILE_SELECT:
      return state.map(t => tile(t, action))

    default:
      return state
  }
}
