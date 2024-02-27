const taskRepository = require('../infrastructure/task-repository')

async function getAllTask(page, pageSize, status){
    return await taskRepository.getAll(page, pageSize, status);
}

module.exports = {getAllTask}