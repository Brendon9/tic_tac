import { GAME_OVER } from '../action-types'
import { includes } from 'lodash'
import { postGame } from '../game/actions'

/************ ACTIONS *****************/
export const checkWinner = (size) => (dispatch, getState) => {
  let { score, board } = getState()

  if (includes(score, size)) {
    dispatch({
      type: GAME_OVER,
      winner: 'X'
    })

    dispatch(postGame({ winner: 'X', mode: board.mode }))

  } else if (includes(score, -size)) {
    dispatch({
      type: GAME_OVER,
      winner: 'O'
    })

    dispatch(postGame({ winner: 'O', mode: board.mode }))
  }
}
