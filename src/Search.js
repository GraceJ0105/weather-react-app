import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <input
        className="searchCity col-8"
        type="search"
        placeholder="Search for a city..."
        autoFocus="on"
        autoComplete="off"
      />
      <input type="submit" value="Search" className="searchButton col-4" />
    </div>
  );
}
