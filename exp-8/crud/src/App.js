// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/items');
      setItems(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch items.');
    }
  };

  const addItem = async () => {
    if (!name.trim() || !description.trim()) {
      setError('Both name and description are required.');
      return;
    }
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/items/${editingId}`, { name, description });
        setEditingId(null);
      } else {
        await axios.post('http://localhost:5000/api/items', { name, description });
      }
      setName('');
      setDescription('');
      setError('');
      fetchItems();
    } catch (err) {
      console.error(err);
      setError('Failed to add/update item.');
    }
  };

  const deleteItem = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      fetchItems();
    } catch (err) {
      console.error(err);
      setError('Failed to delete item.');
    }
  };

  const editItem = (item) => {
    setName(item.name);
    setDescription(item.description);
    setEditingId(item._id);
    setError('');
  };

  const cancelEdit = () => {
    setName('');
    setDescription('');
    setEditingId(null);
    setError('');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CRUD Application</h1>

      <div className="card mb-4">
        <div className="card-header">
          {editingId ? 'Edit Item' : 'Add New Item'}
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addItem();
            }}
          >
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">
              {editingId ? 'Update Item' : 'Add Item'}
            </button>
            {editingId && (
              <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Items List</div>
        <ul className="list-group list-group-flush">
          {items.length === 0 ? (
            <li className="list-group-item">No items available.</li>
          ) : (
            items.map((item) => (
              <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1">{item.description}</p>
                </div>
                <div>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => editItem(item)}>
                    Edit
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteItem(item._id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
