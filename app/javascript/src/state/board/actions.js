import { BOARD_LOAD } from '../action-types'
import { times } from 'lodash'

// Generating the board allows for custom dimenssions.
// Default - size: 3
const generateBoard = (size) => {
  let id = 0
  let tiles = times(size, (idx) => {
    return times(size, (idy) => {
      return { id: id++, xPos: idx, yPos: idy }
    })
  })
  return [].concat(...tiles)
}

export const loadBoard = (size, mode) => {
  let tiles = generateBoard(size)

  return {
    type: BOARD_LOAD,
    size,
    tiles,
    mode
  }
}
