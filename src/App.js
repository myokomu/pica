import React, {Component} from 'react'
import Canvas from './Canvas'
import ControlPanel from './ControlPanel'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      rows: "16",
      columns: "16"
    }
  }

  render() {
    return(
      <div>
        <Canvas rows={this.state.rows} columns={this.state.columns} />
        <ControlPanel />
      </div>
    )
  }
}

export default App
