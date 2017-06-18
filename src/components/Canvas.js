import React, {PropTypes} from 'react'

const Canvas = ({canvas}) => {
  return(
    <div className='canvas'>
      {canvas.map((row, i) => {
        return(
          <div className='row' key={i}>
            {row.map((blockColor, j)=>{
              return(
                <div style={{background: blockColor}}
                  className="block"
                  key={j}>
                </div>
              )})}
          </div>
        )})}
    </div>
  )}

Canvas.propTypes = {
  canvas: PropTypes.array.isRequired
}

export default Canvas
