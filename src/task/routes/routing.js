const router = require('express').Router();
const {getAllTask, getTaskById } = require('../api/task.controller');

router.get('/task', getAllTask);
router.get('/task/:id', getTaskById);

module.exports = router;