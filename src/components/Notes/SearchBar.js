import React from 'react';

const SearchBar = props => (
  <div className="searchbar-container">
    <input
      className="searchbar"
      type="search"
      onChange={props.updateSearchQuery}
    />
  </div>
);

export default SearchBar;
