import React, {PropTypes} from 'react'

const ControlPanel = ({currentColor, palette, addColor, setCurrentColor}) => {
  let input
  return(
    <div className='control-panel'>
      <div>
        <span>current color:</span>
        <span style={{background: currentColor}}>
          {currentColor}
        </span>
      </div>
      <input ref={node => input = node}
             placeholder='color name or code'>
      </input>

      <button onClick={ () => { addColor(input.value); input.value = ''} }>
        add color
      </button>

      {palette.map((color, index) =>
        <div onClick={ () => setCurrentColor(color) }
             style={{background: color}}
             key={index}>
          {color}
        </div>
      )}
    </div>
  )}

ControlPanel.propTypes = {
  currentColor: PropTypes.string.isRequired,
  palette: PropTypes.array.isRequired,
  addColor: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired
}

export default ControlPanel
