import React, {Component} from 'react'
import Canvas from './Canvas'
import ControlPanel from './ControlPanel'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.initialColor = '#505050'
    this.state = {
      rows: '16',
      columns: '16',
      currentColor: this.initialColor
    }
  }

  render() {
    return(
      <div>
        <Canvas rows={this.state.rows}
                columns={this.state.columns}
                currentColor={this.state.currentColor} />
        <ControlPanel setCurrentColor={this.setCurrentColor}
                      initialColor={this.initialColor} />
      </div>
    )
  }

  setCurrentColor = (color) => {
    this.setState({currentColor: color})
  }
}

export default App
