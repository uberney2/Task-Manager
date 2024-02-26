class excepcionTaskNotFound extends Error{
    constructor(id){
        super(`task with id: ${id} not found`)
    }
}

module.exports = excepcionTaskNotFound;