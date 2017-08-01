import React, {Component} from 'react'
import { isEmpty } from 'lodash'
import style from './style'
import Tile from '../Tile/index'

class BoardTitle extends Component {
  render() {
    const { winner, movesLeft, nextMarking } = this.props.board
    let message = ''

    if (winner) {
      message = `Game Over! ${winner} is the winner!`
    } else if (winner === '' && movesLeft === 0) {
      message = "Game Over! It is a TIE"
    } else {
      message = `${nextMarking}'s Turn`
    }

    return (
      <h2 style={style.title}>{message}</h2>
    )
  }
}

class Board extends Component {

  componentWillReceiveProps(nextProps) {
    let { board, aiSelectTile } = nextProps

    if (board.mode === 'single' && board.nextMarking === 'O' && isEmpty(board.winner)) {
      aiSelectTile(board.nextMarking)
    }
  }

  render() {
    const { selectTile, tiles, board } = this.props
    const boardStyle = Object.assign({}, style.board, {
      height: `${board.size * 100}px`,
      width: `${board.size * 100}px`
    })

    return (
      <div>
        <BoardTitle board={board} />

        <div style={boardStyle}>
          {
            tiles.map(tile =>
              <Tile
                key={tile.id}
                {...tile}
                selectTile={() => selectTile(tile.id, board.nextMarking)}
              />
            )
          }
        </div>

      </div>
    )
  }
}

export default Board
