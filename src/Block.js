import React, {Component} from 'react'

class Block extends Component {
  render () {
    return (
      <div className={this.props.index%2 === 0 ? "odd column" : "even column"}>
      </div>
    )
  }
}

export default Block
