const router = require('express').Router();
const {getAllTask, getTaskById, createTask } = require('../api/task.controller');

router.get('/task', getAllTask);
router.get('/task/:id', getTaskById);
router.post('/task', createTask)

module.exports = router;