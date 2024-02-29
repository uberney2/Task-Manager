

const express = require('express');
const swagger = require('./swagger')
const  setTaskRoutes = require('./src/task/routes/task.routes')

const app = express();
const port = 3000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

setTaskRoutes(app)
swagger(app)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})