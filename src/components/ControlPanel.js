import React, {PropTypes} from 'react'

const ControlPanel = ({palette, addColor}) => {
  let input
  return(
    <div className='control-panel'>
      <input ref={node => input = node}
             placeholder='color name or code'>
      </input>

      <button onClick={ () => { addColor(input.value); input.value = ''} }>
        add color
      </button>

      {palette.map((color, index) =>
        <div style={{background: color}}
             key={index}>
          {color}
        </div>
      )}
    </div>
  )}

ControlPanel.propTypes = {
  palette: PropTypes.array.isRequired,
  addColor: PropTypes.func.isRequired
}

export default ControlPanel
