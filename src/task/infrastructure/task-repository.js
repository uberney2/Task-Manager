let tasks = require("./data.json");

async function getAll() {
  try {
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

async function getById(id) {
  try {
    task = tasks.find((task) => task.id === Number(id));
    return task;
  } catch (error) {
    console.log(error);
  }
}

async function create(task) {
  try {
    tasks.push(task);
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

async function deleted(id) {
  try {
    tasks = tasks.filter((task) => task.id !== Number(id));
  } catch (error) {
    console.log(error);
  }
}

async function update(taskToUpdate){
  try {
    const index = tasks.findIndex(task => task.id === Number(taskToUpdate.id));
    tasks[index] = taskToUpdate;
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAll, getById, create, deleted, update };
