const useCasesGetAll = require("../application/getAllTasks");
const useCaseGetTaskById = require("../application/getTaskById");
const excepcionTaskNotFound  = require('../exceptions/taskNotFound')

async function getAllTask(req, res) {
  const tasks = await useCasesGetAll.getAllTask();
  return res.status(200).send(tasks);
}

async function getTaskById(req, res) {
  try {
    const taskId = req.params.id;
    const task = await useCaseGetTaskById.getTaskById(taskId);
    return res.status(200).send(task);
  } catch (error) {
    if (error instanceof excepcionTaskNotFound)
    return res.status(404).send({error: error.message});
  }
  return res.send({error: error.message})
}

module.exports = { getAllTask, getTaskById };
