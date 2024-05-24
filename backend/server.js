const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); 
const port = 8000;

app.use(cors()); 

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myerver', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected"));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

// Define a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    // Create a new document using the FormData model
    const newFormData = new FormData(formData);
    // Save the document to the database
    await newFormData.save();
    console.log('Form data saved to MongoDB:', formData);
    res.send('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
