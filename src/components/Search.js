import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  // en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming
  // useEffectni uchta turi mavjud ..
  //1. dastur ishga tushganda ishlab ketadi
  // useEffect(() => {
  //   console.log("doston");
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: { value },
        },
      });

      setResults(data.data.query.search);
    };

    const timer = setTimeout(() => {
      if (value) {
        getData();
      } else if (!value && results.length) {
        setResults([]);
      }

      return () => {
        clearTimeout(timer);
      };
    }, 1000);
  }, [value]);

  const renderReasults = () => {
    return results.map((val) => {
      return (
        <div className="ui message" key={val.pageid}>
          <div className="header">{val.title}</div>
          <p dangerouslySetInnerHTML={{ __html: val.snippet }}></p>
          <a href={`https://en.wikipedia.org/wiki?curid=${val.pageid}`}>
            Go page
          </a>
        </div>
      );
    });
  };
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
      {renderReasults()}
    </div>
  );
};

export default Search;
