import React, {Component} from 'react'
import Board from '../Board/index'
import style from './style'
import { size } from 'lodash'

class Game extends Component {
  componentDidMount() {
    this.props.getGamesCollection()
  }

  render() {
    const { board, initializeTiles, games } = this.props

    return (
      <div>
        <p style={{textAlign:'center'}}>
          Number of games played: {size(games)}
        </p>
        <div style={style.buttonGroup}>
          <button style={style.button} onClick={() => initializeTiles(3, 'single')}>Single Player</button>
          <button style={style.button} onClick={() => initializeTiles(3, 'multi')}>Mutliplayer</button>
        </div>

        { board.loaded &&
          <Board {...this.props} />
        }
      </div>
    )
  }
}

export default Game
