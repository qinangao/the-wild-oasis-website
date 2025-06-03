"use client";

import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);

  return (
    <div>
      <p>There is {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

export default Counter;
