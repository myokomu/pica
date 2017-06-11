import React, {Component} from 'react'

class Block extends Component {
  constructor (props) {
    super(props)
    this.state = {
      background: this.getDefaultBackground()
    }
  }

  render () {
    return (
      <div className='column'
           style={{background: this.state.background}}
           onClick={this.setBackground}>
      </div>
    )
  }

  setBackground = () => {
    let colorToBeSet
    if (this.state.background === this.props.currentColor) {
      colorToBeSet = this.getDefaultBackground()
    } else {
      colorToBeSet = this.props.currentColor
    }

    this.setState({background: colorToBeSet})
  }

  getDefaultBackground = () => {
    if ((this.props.cordinate[0] + this.props.cordinate[1]) %2 === 0) {
      return '#d0d0d0'
    } else {
      return'#f8f8f8'
    }
  }
}

export default Block
