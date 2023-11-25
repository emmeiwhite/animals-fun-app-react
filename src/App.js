import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of Animals: {count}</div>
    </div>
  );
}
