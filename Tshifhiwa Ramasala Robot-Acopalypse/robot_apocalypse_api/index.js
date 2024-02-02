const express = require('express');
const sequelize = require('./db/db');
const survivorsRouter = require('./routes/survivors');
const robotsRouter = require('./routes/robots');

const app = express();
const PORT = process.env.PORT || 3000; // Use the desired port number

// Middleware for parsing JSON requests
app.use(express.json());

// Database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Default route for the API root
app.get('/', (req, res) => {
  res.send('Welcome to the Robot Apocalypse API!'); // Customize this message
});

// Use Survivor and Robot routes
app.use('/api', survivorsRouter);
app.use('/api', robotsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

