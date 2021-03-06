import React, { useState } from "react";

const Accordion = (props) => {
  const [index, setIndex] = useState("");
  console.log(index);
  const dataRender = () => {
    return props.data.map((val, key) => {
      return (
        <div key={key}>
          <div
            className="ui styled accordion"
            onClick={() => setIndex(key)}
            key={val.index}
          >
            <div className={` title ${index === key ? "active" : ""}`}>
              <i className="dropdown icon"></i>
              {val.savol}
            </div>
            <div className={`content ${index === key ? "active" : ""} `}>
              <p
                className="transition visible"
                style={{ display: "block !important" }}
              >
                {val.javob}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{dataRender()}</div>;
};

export default Accordion;
