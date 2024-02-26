class ExcepcionTaskAlreadyExist extends Error{
    constructor(id){
        super(`task with id: ${id} already exist`)
    }
}

module.exports = ExcepcionTaskAlreadyExist;