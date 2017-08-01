import { TILE_SELECT, BOARD_LOAD, GAME_OVER } from '../action-types'

const initialeState = { loaded: false, nextMarking: 'X', winner: ''}

const board = (state = initialeState, action) => {
  switch(action.type) {

    case BOARD_LOAD:
      return {
        ...state,
        size: action.size,
        mode: action.mode,
        movesLeft: Math.pow(action.size, 2),
        winner: '',
        nextMarking: 'X',
        loaded: true
      }

    case TILE_SELECT:
      return {
        ...state,
        nextMarking: state.nextMarking === 'X' ? 'O' : 'X',
        movesLeft: state.movesLeft - 1
      }

    case GAME_OVER:
      return {
        ...state,
        winner: action.winner
      }

    default:
      return state
  }
}

export default board
