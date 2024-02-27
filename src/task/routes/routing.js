const router = require('express').Router();
const {getAllTask, getTaskById, createTask, deleteTask, updateTask } = require('../api/task.controller');
const { validateTaskData } = require('../middleware/validateTaskData');

router.get('/task', getAllTask);
router.get('/task/:id', getTaskById);
router.post('/task', validateTaskData, createTask)
router.delete('/task/:id', deleteTask)
router.put('/task', updateTask)

module.exports = router;