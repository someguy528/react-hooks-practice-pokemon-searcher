import React from "react";

function Search({search, onSearchChange}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" value={search} onChange={onSearchChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
