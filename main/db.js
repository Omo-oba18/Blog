const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blog',
  password: 'JesuS_0nly.Yu1',
  post: 5432
})

module.exports = pool