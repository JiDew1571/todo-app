const express = require('express');
const { errorMiddleware } = require('./middleware/errorMiddleware');
const connectDB = require('./config/conectDB');
require('dotenv').config();
const port = process.env.PORT_NUM || 5000;

const routes = require('./routes/todoRoutes');

connectDB();

const app = express();

app.use(errorMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/todos', routes);

app.listen(port, () => {
  console.group('index.js:');
  console.log(`Server started on http://localhost:${port}`);
});
