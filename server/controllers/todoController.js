const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');

// desc -> get todo
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

// desc -> create new todo
const createTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const todo = await Todo.create({ text: req.body.text });

  res.status(200).json(todo);
});

// des -> update todo
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error('Todo not found or the id is corrupted');
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: false, versionKey: true }
  );

  res.status(200).json(updatedTodo);
});

// desc -> delete todo
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    console.log('Todo not found or id is corrupted');
  }

  await Todo.findByIdAndDelete(req.params.id);
  res.status(200).json(todo);
});

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
