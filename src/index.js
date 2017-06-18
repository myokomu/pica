import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './App'
import picaApp from './reducers'
import {changeSquareColor, addColorToPalette} from './actions'
import './index.css'

let store = createStore(picaApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

setTimeout(() =>
  store.dispatch(changeSquareColor([3,5])),
  250)

setTimeout(() =>
  store.dispatch(changeSquareColor([1,3])),
  500)

setTimeout(() => {
  store.dispatch(addColorToPalette('red'))
  console.log(store.getState().palette)
}, 500)
