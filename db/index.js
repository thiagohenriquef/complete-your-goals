const { Pool } = require('pg')
const host = 'ec2-54-197-230-161.compute-1.amazonaws.com'
const database = 'd3j7al81ieuhoh'
const user = 'ghoidalghcdjui'
const port = '5432'
const password = '525b8b7d58344774ba647587a4d8ae06c0d9eb011642dffc1de9f244c3624bad'

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`
const pool = new Pool({ connectionString: connectionString, ssl: true })

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}