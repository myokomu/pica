import {connect} from 'react-redux'
import Canvas from '../components/Canvas'
import {changeSquareColor} from '../actions'

const mapStateToProps = state => ({
  canvas: state.canvas,
  blockColorPlaceholder: state.blockColorPlaceholder
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (ownProps) => {
    dispatch(changeSquareColor(ownProps))
  }
})

const CanvasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)

export default CanvasContainer
