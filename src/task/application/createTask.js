const taskRepository = require("../infrastructure/task-repository");
const ExcepcionTaskAlreadyExist  = require('../exceptions/taskAlreadyExist')

async function createTask(task) {
  taskFound = await taskRepository.getById(task.id);
  if(taskFound){
    throw new ExcepcionTaskAlreadyExist(task.id)
  }
  return await taskRepository.create(task);
}

module.exports = { createTask };
