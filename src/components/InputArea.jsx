import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.a} type="text" value={props.c} />
      <button onClick={props.b}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
