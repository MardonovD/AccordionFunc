import React, { useState, useEffect, useRef } from "react";

const DropDown = (props) => {
  const [selection, setSelection] = useState(props.data[0]);
  const [check, setCheck] = useState(true);
  const renderdata = () => {
    return props.data.map((val) => {
      if (val.value === selection.value) {
        return;
      }
      return (
        <div
          onClick={() => setSelection(val)}
          className="item"
          data-value="jenny"
          key={val.value}
        >
          {val.label}
        </div>
      );
    });
  };

  const ref = useRef();

  return (
    <div
      ref={ref}
      onClick={() => {
        setCheck(!check);
      }}
      className={`ui fluid selection dropdown ${check ? "active visible" : ""}`}
    >
      <input type="hidden" name="user" />
      <i className="dropdown icon"></i>
      <div className="default text">{selection.label}</div>
      <div className={`menu ${check ? "transition visible" : ""}`}>
        {renderdata()}
      </div>
      <h1 style={{ color: `${selection.value}`, marginTop: "100px" }}>
        Hello World
      </h1>
    </div>
  );
};

export default DropDown;
