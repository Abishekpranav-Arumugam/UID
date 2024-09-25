import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mx-2" onClick={increment}>Increment</button>
        <button className="btn btn-danger mx-2" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
