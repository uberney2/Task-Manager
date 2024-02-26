const router = require('express').Router();
const {getAllTask} = require('../api/task.controller');

router.get('/task', getAllTask);

module.exports = router;