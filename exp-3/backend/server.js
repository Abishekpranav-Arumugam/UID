const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/register', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  dob: Date,
  areaOfInterest: String,
  dbms: Boolean,
  cn: Boolean,
  wto: Boolean,
});

// Create a model
const User = mongoose.model('User', UserSchema);


const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:5000/api/saveFormData', formData);
        alert('Form submitted successfully');
      } catch (error) {
        console.error('Error saving form data', error);
      }
    }
  };
  

// Handle form submission
app.post('/api/saveFormData', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error saving user data' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
