import React, { useState, useCallback, useEffect } from "react";

function App() {
  let [count, setCount] = useState(0);


  useEffect(() => {
    console.log("Page re-renderd")
  },)
  return (
    <div>
      <button onClick={() => setCount(count++)}>+</button>
      <p>{count}</p>
    </div>
  );
}

export default App


