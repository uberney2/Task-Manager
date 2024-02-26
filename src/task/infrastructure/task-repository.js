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
        task = tasks.filter(task => task.id === Number(id));
        return task
    } catch (error) {
        console.log(error);
    }
}

async function create(task){

}

module.exports = {getAll, getById};