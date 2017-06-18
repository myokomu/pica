import {connect} from 'react-redux'
import {addColorToPalette, setCurrentColor} from '../actions'
import ControlPanel from '../components/ControlPanel'

const mapStateToProps = (state) => ({
  palette: state.palette,
  currentColor: state.currentColor
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addColor: (ownProps) => {
    dispatch(addColorToPalette(ownProps))
  },
  setCurrentColor: (ownProps) => {
    dispatch(setCurrentColor(ownProps))
  }
})

const ControlPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel)

export default ControlPanelContainer
