import { connect } from 'react-redux'
import { selectTile, aiSelectTile } from '../../state/tiles/actions'
import { loadBoard } from '../../state/board/actions'
import Game from '../../components/Game/index'

const mapStateToProps = (state, props) => {
  return {
    tiles: state.tiles,
    board: state.board
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    selectTile: (id, marking) => dispatch(selectTile(id, marking)),
    aiSelectTile: (marking) => dispatch(aiSelectTile(marking)),
    initializeTiles: (size, mode) => dispatch(loadBoard(size, mode))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
