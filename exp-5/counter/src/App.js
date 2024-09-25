import React from 'react';
import Counter from './components/Counter';  // Importing the Counter component
import './App.css';  // Optional custom styling
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <Counter />  {/* Counter component rendered */}
    </div>
  );
}

export default App;