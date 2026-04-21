import { useState } from "react";

const Counter = () => {
  //define the state of Counter
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>Play with Counter</header>
      <button onClick={() => setCounter((prev) => prev + 1)}>➕</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>➖</button>
      Counter : {counter}
    </>
  );
};

export default Counter;
