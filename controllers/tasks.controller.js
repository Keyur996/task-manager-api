const Task = require("../models/task.model");
const _ = require('lodash');
const asyncWrapper = require("../middlewares/async");
const {createCustomError}=require("../errors/custom-error");

module.exports.getAllTasks = asyncWrapper(async (req, res) => {
    let tasks = await Task.find({})
    res.status(200).json({message: 'Tasks Fetched Successfully', tasks});
});

module.exports.addTask = asyncWrapper(async (req, res) => {
    let task = await Task.create(_.cloneDeep(req.body))
    res.status(201).json({message: 'Task Created Successfully.', task});
});

module.exports.updateTask = asyncWrapper(async (req, res) => {
    let task = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    if(!task) next(createCustomError("no task for that id", 400));
    res.status(200).json({message: 'updateTask called', task});
})

module.exports.deleteTask = asyncWrapper(async (req, res) => {
    let task = await Task.findOneAndDelete({ _id: req.params.id })
    if(!task) next(createCustomError("no task for that id", 400));
    res.status(200).json({message: 'deleteTask called', task });
})

module.exports.getTask = asyncWrapper(async (req, res) => {
    let task = await Task.findOne({ _id: req.params.id })
    if(!task) next(createCustomError("no task for that id", 400));
    res.status(200).json({message: 'getTask called', task });
})