const { Pool } = require('pg')
const connectionString = 'postgresql://postgres:postgres@localhost:5432/metas'
const pool = new Pool({ connectionString })

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}