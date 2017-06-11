import _ from 'lodash'
import React, {Component} from 'react'

class Canvas extends Component {
  render () {
    return (
      <div className='canvas'>
        {_.times(this.props.rows, (i) => {
          return(
            <div className={i%2 === 0 ? "odd row" : "even row"} key={i}>
              {_.times(this.props.columns, (j) => {
                return(
                  <div className={j%2 === 0 ? "odd column" : "even column"} key={j}>
                  </div>
                )
              })}
            </div>)
        })}
      </div>
    )
  }
}

export default Canvas
