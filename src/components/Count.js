import react, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((counted) => counted + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default Count;
