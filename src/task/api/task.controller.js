const useCasesGetAll = require('../application/getAllTasks');

async function getAllTask(req, res) {
    const tasks = await useCasesGetAll.getAllTask();
    return await res.status(200).send(tasks);
}

module.exports = {getAllTask};