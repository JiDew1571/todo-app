import axios from 'axios';

const API_URL = '/api/v1/todos/';

// Create new todo
const createTodo = async (todoData) => {
  const response = await axios.post(API_URL, todoData);

  return response.data;
};

// Get user todos
const getTodos = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Delete user todo
const deleteTodo = async (todoId) => {
  const response = await axios.delete(API_URL + todoId);

  // await axios.delete(API_URL + todoId);
  return response.data;
};

const todoService = {
  createTodo,
  getTodos,
  deleteTodo,
};

export default todoService;
