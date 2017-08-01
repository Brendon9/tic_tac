import { GAME_OVER } from '../action-types'
import { includes } from 'lodash'

export const checkWinner = (size) => (dispatch, getState) => {
  let { score } = getState()

  if (includes(score, size)) {
    dispatch({
      type: GAME_OVER,
      winner: 'X'
    })
  } else if (includes(score, -size)) {
    dispatch({
      type: GAME_OVER,
      winner: 'O'
    })
  }

}
