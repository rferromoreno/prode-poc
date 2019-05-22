import { LOAD_MATCHES, RESET_MATCHES } from '../constants/matches'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MATCHES:
      return action.payload
    case RESET_MATCHES:
      return initialState
    default:
      return state
  }
}
