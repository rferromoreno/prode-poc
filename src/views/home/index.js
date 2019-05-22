import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAllMatches } from '../../selectors/matches'
import { getMatches } from '../../actions/matches'
import { MATCH_TYPES } from '../../constants/enums'
import Panel from './Panel'

class Home extends React.Component {
  componentDidMount() {
    this.props.getMatches()
  }

  render() {
    const { matches } = this.props
    if (!matches) return null
    return (
      <div>
        <Panel type={MATCH_TYPES.FINAL} />
        <Panel type={MATCH_TYPES.SEMIFINALS} />
        <Panel type={MATCH_TYPES.QUARTERFINALS} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  matches: getAllMatches(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMatches
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
