import { createStore, applyMiddleware } from "redux"
import { rootReducer, initialState } from "./reducers"
import loggingMiddleware from "./loggingMiddleware"

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(loggingMiddleware)
  )
  return store
}

export default configureStore