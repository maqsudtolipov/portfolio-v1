const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const projectRouter = require('./routes/projectRoutes');

const app = express();

// Middlewares
app.use(cors());
app.options('*', cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Routes
app.use('/api/v1/projects', projectRouter);

module.exports = app;
