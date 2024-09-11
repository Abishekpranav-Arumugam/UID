const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/register', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  areaOfInterest: { type: String, required: true },
  dbms: { type: Boolean, default: false },
  cn: { type: Boolean, default: false },
  wto: { type: Boolean, default: false },
});

// Create a model
const User = mongoose.model('User', UserSchema);

// Handle form submission
app.post('/api/saveFormData', async (req, res) => {
  try {
    const newUser = new User(req.body);  // Ensure req.body is correctly passed
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(400).json({ error: 'Error saving user data' });
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
