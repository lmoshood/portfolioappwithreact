import React, { useState } from "react";

function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(count + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(count <= 0 ? 0:  count - 1);
  };
  return (
    <div className="container">
      <div >
        <button className="btn btn-danger" onClick={handleDecrement}>-</button>
        <h5>Count is {count}</h5>
        <button className="btn btn-primary" onClick={handleIncrement}>+</button>
      </div>
      <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;