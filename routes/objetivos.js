const db = require('../db')
const router = require('express').Router()
const errorCallback = err => res.status(500).send(err)

router.get('/', (req, res) => {
  db.query('select * from objetivos')
    .then(({ rows }) => res.status(200).json(rows))
    .catch(errorCallback)
})

router.get('/:id', (req, res) => {
  const query = {
    text: 'select * from objetivos where id = $1',
    values: [parseInt(req.params.id)]
  }
  db.query(query)
    .then(({ rows }) => res.status(200).json(rows[0]))
    .catch(errorCallback)
})

router.post('/', (req, res) => {
  db.query('insert into objetivos(texto, concluido) values ($1, false) RETURNING id', [req.body.texto])
    .then(({ rows }) => res.status(200).json(rows[0].id))
    .catch(errorCallback)
})

router.put('/:id', (req, res) => {
  const query = {
    text: 'update objetivos set texto = $1, concluido = true where id = $2 RETURNING id, texto', 
    values: [req.body.texto, parseInt(req.params.id)]
  }
  db.query(query)
    .then(({ rows }) => res.status(200).json(rows[0]))
    .catch(errorCallback)
})

router.delete('/:id', (req, res) => {
  db.query('delete from objetivos where id = $1', [parseInt(req.params.id)])
    .then(() => res.status(200).json({ status: 'success' }))
    .catch(errorCallback)
})

module.exports = router
