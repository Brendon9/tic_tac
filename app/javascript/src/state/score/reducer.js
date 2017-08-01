import { TILE_SELECT, BOARD_LOAD } from '../action-types'

// score[action.tile.xPos] += point
// score[action.size + action.tile.yPos] += point
// if (action.tile.xPos === action.tile.yPos) {
//   score[2 * action.size] += point
// }
// if ((action.size - 1 - action.tile.yPos) === action.tile.xPos) {
//   score[(2 * action.size) + 1] += point
// }

export default (state = [], action) => {
  switch(action.type) {

    case BOARD_LOAD:
      return new Array(2 * action.size + 2).fill(0)

    case TILE_SELECT:
      let size = 3
      let point = action.marking === 'X' ? 1 : -1

      return Object.assign(
        [...state], {
          // Score on the horizontal
          [action.tile.xPos]: state[action.tile.xPos] + point,
          // Score on the vertical
          [size + action.tile.yPos]: state[size + action.tile.yPos] + point,
          // Score on the diagonal
          [2 * size]: (action.tile.xPos === action.tile.yPos) ?
            state[2 * size] + point :
            state[2 * size],
          // Score on the anti-diagonal
          [(2 * size) + 1]: ((size - 1 - action.tile.yPos) === action.tile.xPos) ?
            state[(2 * size) + 1] + point :
            state[(2 * size) + 1]
        }
      )

    default:
      return state
  }
}
