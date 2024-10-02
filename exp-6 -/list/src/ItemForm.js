import React, { useState } from 'react';

const ItemForm = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name: itemName, description, quantity };
    setItems([...items, newItem]);
    setItemName('');
    setDescription('');
    setQuantity(1);
  };

  return (
    <div className="text-center card p-5 shadow-lg">
      <h2 className="card-title">Add a New Item</h2><br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            min="1"
          />
        </div><br></br>
        <button type="submit">Add Item</button>
      </form><br></br>

      <h3>Items List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.description} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemForm;
