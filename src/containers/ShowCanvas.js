import {connect} from 'react-redux'
import Canvas from '../components/Canvas'
import {changeSquareColor} from '../actions'

const mapStateToProps = (state) => ({
  canvas: state.canvas
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (ownProps) => {
    dispatch(changeSquareColor(ownProps, 'green'))
  }
})

const ShowCanvas = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)

export default ShowCanvas
