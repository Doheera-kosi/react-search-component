/* eslint-disable max-len */
import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import movies from './movies';
import './search.css';

function SearchComponent() {
  const [searchText, setSearchTex] = useState('');

  const handleSearchInput = (event) => {
    setSearchTex(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchText.toLocaleLowerCase()));

  return (
    <div className="main-container">
      <div className="search-container">
        <input type="text" placeholder="Search movies..." value={searchText} onChange={handleSearchInput} />
        <RiSearchLine />
      </div>
      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li key={movie.title}>
            {movie.title}
            (
            {movie.year}
            )
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
