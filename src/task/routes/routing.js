const router = require('express').Router();
const {getAllTask, getTaskById, createTask, deleteTask, updateTask } = require('../api/task.controller');
const { validateTaskData } = require('../middleware/validateTaskData');


/**
 * @swagger
 * /task:
 *    get:
 *     summary: Get all tasks
 *     description: Retrieve a list of all tasks.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           description: The page number.
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           description: The number of tasks per page.
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           description: Filter tasks by status (active/inactive).
 *     responses:
 *       '200':
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the task.
 *                   name:
 *                     type: string
 *                     description: The name of the task.
 *                   description:
 *                     type: string
 *                     description: The description of the task.
 *                   createdDate:
 *                     type: string
 *                     format: date-time
 *                     description: The date and time when the task was created.
 *                   dueDate:
 *                     type: string
 *                     format: date-time
 *                     description: The due date of the task.
 *                   status:
 *                     type: string
 *                     description: The status of the task (active/inactive).
 *       '500':
 *         description: Internal server error.
 */
router.get('/task', getAllTask);

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Obtener una tarea por ID
 *     description: Recupera una tarea por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: ID de la tarea.
 *     responses:
 *       '200':
 *         description: Detalles de la tarea.
 *         content:
 *           application/json:
 *             schema:
 *       '404':
 *         description: Tarea no encontrada.
 *       '500':
 *         description: Error interno del servidor.
 */
router.get('/task/:id', getTaskById);

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Crear una nueva tarea
 *     description: Crea una nueva tarea.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             id: 1
 *             name: tarea 1
 *             description: descripción de la tarea 1
 *             createdDate: 2024-02-29T12:00:00Z
 *             dueDate: 2024-03-10T12:00:00Z
 *             status: activa
 *     responses:
 *       '201':
 *         description: Tarea creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *       '400':
 *         description: La tarea ya existe.
 *       '500':
 *         description: Error interno del servidor.
 */
router.post('/task', validateTaskData, createTask)

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Eliminar una tarea por ID
 *     description: Elimina una tarea por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: ID de la tarea a eliminar.
 *     responses:
 *       '200':
 *         description: Tarea eliminada exitosamente.
 *       '400':
 *         description: La tarea no existe.
 *       '500':
 *         description: Error interno del servidor.
 */
router.delete('/task/:id', deleteTask)

/**
 * @swagger
 * /task:
 *   put:
 *     summary: Actualizar una tarea
 *     description: Actualiza una tarea existente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             id: 1
 *             name: tarea actualizada
 *             description: descripción actualizada de la tarea
 *             createdDate: 2024-02-29T12:00:00Z
 *             dueDate: 2024-03-10T12:00:00Z
 *             status: activa
 *     responses:
 *       '200':
 *         description: Tarea actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *       '404':
 *         description: Tarea no encontrada.
 *       '500':
 *         description: Error interno del servidor.
 */
router.put('/task', updateTask)

module.exports = router;