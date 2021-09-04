const express = require('express');

// Database
const db = require('./config/database');

// Testing database connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.get('/', (req, res) => res.send('Initialise'));

// Parser
app.use(express.json());

// Referral routes
app.use('/referral', require('./routes/referral'));

// User routes
app.use('/user', require('./routes/user'));

// Pay routes
app.use('/pay', require('./routes/pay'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));