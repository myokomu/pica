import _ from 'lodash'
import React, {Component} from 'react'

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newColor: '',
      colors: [this.props.initialColor]
    }
  }

  render() {
    return (
      <div className='control-panel'>
        <div>
          <input value={this.state.newColor}
                 onChange={this.setNewColorValue}>
          </input>
          <button onClick={this.addNewColor}>Add New Color</button>
          <div className='colors'>
            {this.state.colors.map((color, index) => {
              return(
                <div style={{background: color}}
                     key={index}
                     onClick={this.changeCurrentColor}>
                  {color}
                </div>
            )})}
          </div>
        </div>
      </div>
    )
  }

  changeCurrentColor = (e) => {
    this.props.setCurrentColor(e.target.textContent)
  }

  addNewColor = () => {
    let updatedColors= this.state.colors.concat(this.state.newColor)
    this.setState({
      colors: updatedColors
    })
    this.props.setCurrentColor(this.state.newColor)
  }

  setNewColorValue = (e) => {
    this.setState({newColor: e.target.value})
  }
}

export default ControlPanel
