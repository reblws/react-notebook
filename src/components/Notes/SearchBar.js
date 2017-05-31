import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => (
  <div className="searchbar-container">
    <input
      className="searchbar"
      type="search"
      onChange={props.updateSearchQuery}
    />
  </div>
);

SearchBar.propTypes = {
  updateSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
