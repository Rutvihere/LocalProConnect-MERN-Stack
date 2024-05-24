const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Review = require('./models/Review');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/reviewsdb', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("Connected"));

app.post('/api/reviews', async (req, res) => {
  try {
    const { name, rating, interested, message } = req.body;
    const review = new Review({ name, rating, interested, message });
    await review.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/reviews', async (req, res) => {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
