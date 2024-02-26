const taskRepository = require('../infrastructure/task-repository')

async function createTask(){
    return await taskRepository.getAll();
}

module.exports = {getAllTask}