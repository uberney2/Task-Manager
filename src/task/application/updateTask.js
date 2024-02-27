const taskRepository = require("../infrastructure/task-repository");
const ExcepcionTaskNotFound  = require('../exceptions/taskNotFound')

async function updateTask(taskToUpdate) {
  task = await taskRepository.getById(taskToUpdate.id);
  if (!task) {
    throw new ExcepcionTaskNotFound(taskToUpdate.id);
  }
  return await taskRepository.update(taskToUpdate);
}

module.exports = { updateTask };