import { TILE_SELECT } from '../action-types'
import { filter } from 'lodash'
import { checkWinner } from '../score/actions'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const selectTile = (id, marking) => (dispatch, getState) => {
  let { tiles, board } = getState()

  dispatch({
    type: TILE_SELECT,
    id,
    tile: tiles[id],
    marking
  })

  dispatch(checkWinner(board.size))
}

export const aiSelectTile = (marking) => (dispatch, getState) => {
  let { tiles, board } = getState()

  let availableCells = filter(tiles, (t) => t.marking === undefined)
  let randomTile = availableCells[Math.floor(Math.random() * (availableCells.length))]

  sleep(250).then(() => {
    dispatch({
      type: TILE_SELECT,
      id: randomTile.id,
      tile: randomTile,
      marking
    })

    dispatch(checkWinner(board.size))
  })
}
