import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

//! learning redux
const defaultState = {
  cash: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return {...state, cash: state.cash + action.payload}
    case 'GET_CASH':
      return {...state, cash: state.cash - action.payload}

    default:
      return state
  }
}

const store = createStore(reducer)
//! end code snippet

createRoot(document.getElementById('root')).render(
  <Provider store={store} type='learning redux'>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
