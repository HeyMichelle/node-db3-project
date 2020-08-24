const db = require('../data/dbConfig.js');

// helper functions


module.exports = {
  find,
  findById,
  findSteps,
  addSteps,
  insert,
  update,
  remove,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({id})
    .first();
}

// find steps per scheme id:

function findSteps(id) {
    return db('schemes')
      .where({id})
      .first();
  }

// add steps per scheme id (post)
async function insert(data) {
    const id = await db('schemes')
      .insert(data, "id")
    
    return findById(id);
    
  }



// add schemes
async function insert(payload) {
  const id = await db('schemes')
    .insert(payload, "id")
  
  return findById(id);
  
}

// update car info
function update(id, changes) {
    return db('schemes')
      .where({ id })
      .update(changes, '*');
} 


// delete
function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
}
