const knex = require('knex');
const knexConfig = require('../knexfile.js');

const database = knex(knexConfig.development); // selecting dev environment from knex file where knex is configured

module.exports = database;