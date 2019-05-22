import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { getMatchByType } from '../../selectors/matches'

const Match = ({ teamA, teamB }) => (
  <Row>
    <Col md={{ span: 2, offset: 2 }}>{teamA}</Col>
    <Col md={{ span: 2, offset: 2 }}>vs.</Col>
    <Col md={{ span: 2, offset: 2 }}>{teamB}</Col>
  </Row>
)

const Title = props => (
  <Row>
    <Col md={{ offset: 6 }}>{props.children}</Col>
  </Row>
)

const Panel = ({ matches = [], type }) => (
  <Container>
    <Title>{type}</Title>
    {matches.map(m => (
      <Match key={m.id} teamA={m.teamA} teamB={m.teamB} />
    ))}
  </Container>
)

const mapStateToProps = (state, { type }) => ({
  matches: getMatchByType(type)(state)
})

export default connect(mapStateToProps)(Panel)
