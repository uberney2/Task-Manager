const tasks  = require('./data')

async function getAll(){
    return tasks;
}

module.exports = {getAll};