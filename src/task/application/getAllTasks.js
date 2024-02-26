const taskRepository = require('../infrastructure/task-repository')

async function getAllTask(){
    return await taskRepository.getAll();
}

module.exports = {getAllTask}