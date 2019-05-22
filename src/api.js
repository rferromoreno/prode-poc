import axios from 'axios'
import { MATCHES_URL } from './constants/api'

const fetchMatches = () => axios.get(MATCHES_URL).then(res => res.data)

export { fetchMatches }
