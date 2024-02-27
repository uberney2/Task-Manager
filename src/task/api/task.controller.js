const useCasesGetAllTask = require("../application/getAllTasks");
const useCaseGetTaskById = require("../application/getTaskById");
const useCaseCreateTask = require("../application/createTask");
const useCaseDeleteTask = require('../application/deleteTask');
const useCaseUpdateTask = require('../application/updateTask')
const ExcepcionTaskNotFound = require("../exceptions/taskNotFound");
const ExcepcionTaskAlreadyExist = require("../exceptions/taskAlreadyExist");

//the pagination use queryParams like this: /api/v1/task?page=1&pageSize=10
async function getAllTask(req, res) {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const tasks = await useCasesGetAllTask.getAllTask(page, pageSize);
  return res.status(200).send(tasks);
}

async function getTaskById(req, res) {
  try {
    const taskId = req.params.id;
    const task = await useCaseGetTaskById.getTaskById(taskId);
    return res.status(200).send(task);
  } catch (error) {
    if (error instanceof ExcepcionTaskNotFound) {
      return res.status(404).send({ error: error.message });
    }
    return res.send({ error: error.message });
  }
}

async function createTask(req, res) {
  try {
    const newTask = req.body;
    const savedTask = await useCaseCreateTask.createTask(newTask);
    return res.status(201).send(savedTask);
  } catch (error) {
    if (error instanceof ExcepcionTaskAlreadyExist) {
      return res.status(400).send({ error: error.message });
    }
    return res.send({ error: error.message });
  }
}

async function deleteTask(req, res){
  try {
    const taskId = req.params.id;
    await useCaseDeleteTask.deleteTaskById(taskId) 
    return res.status(200).send({message: `Task with id: ${taskId} was deleted successfully `})
  } catch (error) {
    if (error instanceof ExcepcionTaskAlreadyExist) {
      return res.status(400).send({ error: error.message });
    }
    return res.send({ error: error.message });
  }
}

async function updateTask(req, res) {
  try {
    const task = req.body;
    const updatedTaskList = await useCaseUpdateTask.updateTask(task);
    return res.status(200).send(updatedTaskList);
  } catch (error) {
    if (error instanceof ExcepcionTaskNotFound) {
      return res.status(404).send({ error: error.message });
    }
    return res.send({ error: error.message });
  }
}


module.exports = { getAllTask, getTaskById, createTask, deleteTask, updateTask };
