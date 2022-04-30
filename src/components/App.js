import React from "react";
import Accordion from "./Accordion.js";
import Search from "./Search.js";
import DropDown from "./Dropdown.js";
const dataAccordion = [
  { savol: "qalay1", javob: "Zur1" },
  { savol: "qalay2", javob: "Zur2" },
  { savol: "qalay3", javob: "Zur3" },
];
//<Accordion data={dataAccordion} />;<Search />;

const dataDropDown = [
  { label: "The color red", value: "red" },
  { label: "The color green", value: "green" },
  { label: "The color blue", value: "blue" },
];
const App = () => {
  return <DropDown data={dataDropDown} />;
};

export default App;
