const router = require('express').Router();
const {getAllTask, getTaskById, createTask, deleteTask } = require('../api/task.controller');

router.get('/task', getAllTask);
router.get('/task/:id', getTaskById);
router.post('/task', createTask)
router.delete('/task/:id', deleteTask)

module.exports = router;