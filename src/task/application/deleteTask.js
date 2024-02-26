const taskRepository = require("../infrastructure/task-repository");
const ExcepcionTaskNotFound = require("../exceptions/taskNotFound");

async function deleteTaskById(id) {
  task = await taskRepository.getById(id);
  if (!task) {
    throw new ExcepcionTaskNotFound(id);
  }
  await taskRepository.deleted(id);
}

module.exports = { deleteTaskById };
