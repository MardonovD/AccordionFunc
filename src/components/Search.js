import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  // en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: "value",
        },
      });
      console.log(data.data.query.search);
    };
    getData();
  }, [value]);

  return (
    <div className="ui container" style={{ marginTop: "40px" }}>
      <div className="ui input focus" style={{ width: "100%" }}>
        <input
          value={value}
          onChange={changeValue}
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Search;
