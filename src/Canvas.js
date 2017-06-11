import _ from 'lodash'
import React, {Component} from 'react'
import Block from './Block'

class Canvas extends Component {
  render () {
    return (
      <div className='canvas'>
        {_.times(this.props.rows, (i) => {
          return(
            <div className={i%2 === 0 ? "odd row" : "even row"} key={i}>
              {_.times(this.props.columns, (j) => {
                return(
                  <Block index={j} key={j} />
                )
              })}
            </div>)
        })}
      </div>
    )
  }
}

export default Canvas
