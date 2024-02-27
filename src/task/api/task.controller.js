const useCasesGetAllTask = require("../application/getAllTasks");
const useCaseGetTaskById = require("../application/getTaskById");
const useCaseCreateTask = require("../application/createTask");
const useCaseDeleteTask = require('../application/deleteTask');
const useCaseUpdateTask = require('../application/updateTask')
const ExcepcionTaskNotFound = require("../exceptions/taskNotFound");
const ExcepcionTaskAlreadyExist = require("../exceptions/taskAlreadyExist");

async function getAllTask(req, res) {
  const tasks = await useCasesGetAllTask.getAllTask();
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
