const taskRepository = require("../infrastructure/task-repository");
const ExcepcionTaskNotFound  = require('../exceptions/taskNotFound')

async function getTaskById(id) {
  task = await taskRepository.getById(id);
  if (!task) {
    throw new ExcepcionTaskNotFound(id);
  }
  return task;
}

module.exports = { getTaskById };
