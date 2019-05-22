import { createSelector } from 'reselect'

export const getAllMatches = state => state.matches

export const getMatchByType = type =>
  createSelector(
    getAllMatches,
    matches => matches.filter(match => match.type === type)
  )
