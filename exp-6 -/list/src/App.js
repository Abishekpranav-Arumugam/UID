import React from 'react';
import ItemForm from './ItemForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Inventory Management</h1>
      <ItemForm />
    </div>
  );
};

export default App;
