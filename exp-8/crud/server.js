const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/crud-app', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const ItemSchema = new mongoose.Schema({
   name: String,
   description: String,
});

const Item = mongoose.model('Item', ItemSchema);

// Create
app.post('/api/items', async (req, res) => {
   const newItem = new Item(req.body);
   await newItem.save();
   res.status(201).json(newItem);
});

// Read (All Items)
app.get('/api/items', async (req, res) => {
   const items = await Item.find();
   res.status(200).json(items);
});

// Read (Single Item)
app.get('/api/items/:id', async (req, res) => {
   const item = await Item.findById(req.params.id);
   res.status(200).json(item);
});

// Update
app.put('/api/items/:id', async (req, res) => {
   const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
   res.status(200).json(updatedItem);
});

// Delete
app.delete('/api/items/:id', async (req, res) => {
   await Item.findByIdAndDelete(req.params.id);
   res.status(204).json({ message: 'Item deleted' });
});

app.listen(5000, () => {
   console.log('Server running on port 5000');
});
