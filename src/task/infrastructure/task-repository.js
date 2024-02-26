const tasks  = require('./data')

async function getAll(){
    try {
        return tasks;
    } catch (error) {
        console.log(error);
    }
}

async function getById(id){
    try {
        task = tasks.find(task => task.id === Number(id));
        return task
    } catch (error) {
        console.log(error);
    }
}

async function create(task){
    try {
        tasks.push(task)
        return tasks
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAll, getById, create};