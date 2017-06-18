import React, {PropTypes} from 'react'

const Canvas = ({canvas, onClick}) => {
  return(
    <div className='canvas'>
      {canvas.map((row, i) => {
        return(
          <div className='row' key={i}>
            {row.map((blockColor, j)=>{
              return(
                <div onClick={()=>(onClick([i,j]))}
                     style={{background: blockColor}}
                     className="block"
                     key={j}>
                </div>
              )})}
          </div>
        )})}
    </div>
  )}

Canvas.propTypes = {
  canvas: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Canvas
