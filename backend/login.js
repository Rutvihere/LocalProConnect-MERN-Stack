
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Define a login route
app.post('/login', (req, res) => {
  // Extract username and password from request body
  const { username, password } = req.body;

  // Respond with success message
  res.status(200).json({ message: 'Login successful' });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
