const taskRepository = require('../infrastructure/task-repository')

async function getAllTask(page, pageSize){
    return await taskRepository.getAll(page, pageSize);
}

module.exports = {getAllTask}