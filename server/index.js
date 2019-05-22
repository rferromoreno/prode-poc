const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()

const PORT_NUMBER = 8000

app.use(cors())
app.use(bodyParser.json())

app.get('/api/matches', (req, res) => {
  res.status(200).json(require('./mock/matches.json'))
})

app.listen(PORT_NUMBER, function() {
  console.log('Server started on port:', PORT_NUMBER)
})
