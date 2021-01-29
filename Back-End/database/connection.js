const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '9358Ope$',
      database : 'boomsell'
    }
  });

  module.exports = knex;