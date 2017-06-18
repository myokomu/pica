import {connect} from 'react-redux'
import Canvas from '../components/Canvas'

const mapStateToProps = (state) => ({
  canvas: state.canvas
})

const ShowCanvas = connect(
  mapStateToProps
)(Canvas)

export default ShowCanvas
