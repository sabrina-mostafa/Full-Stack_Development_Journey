import React from "react";

const Counter = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.updateCount} >
        {props.text}
      </button>
    </div>
  );
};

export default Counter;
