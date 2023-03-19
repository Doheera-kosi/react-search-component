import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

function SearchComponent() {
  return (
    <div>
      <div className="search-container">
        <input type="text" name="t" id="" placeholder="Search movies..." />
        <RiSearchLine />
      </div>
      <ul className="movie-list">
        <li>Movie 1</li>
        <li>Movie 2</li>
        <li>Movie 3</li>
        <li>Movie 4</li>
        <li>Movie 5</li>
      </ul>
    </div>
  );
}

export default SearchComponent;
