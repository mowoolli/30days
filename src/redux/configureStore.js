import { createStore, combineReducers } from "redux"
import { rootReducer, initialState } from "./reducers"
import { reducer, initialState as userInitialState } from "./currentUser"

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      time: rootReducer,
      user: reducer
    }),
    {
      time: initialState,
      user: userInitialState
    }
  )
  return store
}

export default configureStore