taskRouter = require('../routes/routing')

function setTaskRoutes(app){
    app.use('/api/v1', taskRouter);
}

module.exports = setTaskRoutes;