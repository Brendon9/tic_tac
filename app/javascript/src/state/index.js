import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import api from '../api'

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
     composeWithDevTools(
      applyMiddleware(thunk, api)
    )
  )

  return store
}
