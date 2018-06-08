const app = require('express')()

const load = path => require(`./${path}`)

app.use('/objetivos', load('objetivos'))

module.exports = app