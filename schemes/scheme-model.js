const db = require("../data/dbConfig.js");


module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}


function findSteps(id) {
  return db('schemes as s')
    .join('steps as c','s.id', 'c.scheme_id',)
    .select('s.scheme_name', 'c.step_number', 'c.instructions', )
    .where({ scheme_id: id });

}

function add(schemeData) {
  return db("schemes")
   .insert(schemeData)
}

function update(changes, id) {
  return db("schemes").where({ id }).update(changes);
}

function remove(id) {
  return db("schemes").where({ id }).del();
}
