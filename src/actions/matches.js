import { fetchMatches } from '../api'
import { LOAD_MATCHES, RESET_MATCHES } from '../constants/matches'

const getMatchesSuccess = payload => ({
  type: LOAD_MATCHES,
  payload
})

const getMatchesFailure = () => ({
  type: RESET_MATCHES
})

export const getMatches = () => dispatch =>
  fetchMatches()
    .then(data => dispatch(getMatchesSuccess(data)))
    .catch(error => dispatch(getMatchesFailure(error)))
