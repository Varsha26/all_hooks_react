import { useState } from "react";

const ChildComponent = (props) => {
  const handleClick = () => {
    props.fetchValue("Value is passed");
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Pass Value</button>
    </div>
  );
};

export default ChildComponent;
