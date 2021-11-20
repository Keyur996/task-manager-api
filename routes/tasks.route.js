const express = require('express');
const router = express.Router();
const { getAllTasks, addTask, getTask, updateTask, deleteTask } = require("../controllers/tasks.controller");

router.route('/').get(getAllTasks).post(addTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
