const taskRepository = require("../infrastructure/task-repository");
const excepcionTaskNotFound  = require('../exceptions/taskNotFound')

async function getTaskById(id) {
  task = await taskRepository.getById(id);
  if (task.length === 0) {
    throw new excepcionTaskNotFound(id);
  }
  return task;
}

module.exports = { getTaskById };
