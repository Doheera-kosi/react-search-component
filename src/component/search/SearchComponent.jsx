import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import movies from './movies';
import './search.css';

function SearchComponent() {
  const [searchText, setSearchTex] = useState('');

  const handleSearchInput = (event) => {
    setSearchTex(event.target.value);
  };

  const filteredMovies = movies.filter(
    (movie) => movie.title.toLowerCase().includes(searchText.toLocaleLowerCase()),
  );
  const totalMovies = movies.length;

  return (
    <div className="main-container">
      <h2>Movie List Filter</h2>
      <div className="search-container">
        <input type="text" placeholder="Search movies..." value={searchText} onChange={handleSearchInput} />
        <RiSearchLine style={{ fontSize: '2.4rem', color: '#43ce54' }} />
      </div>
      <div className="search-info">
        <p>
          Showing
          {' '}
          {filteredMovies.length}
          {' '}
          of
          {' '}
          {totalMovies}
          {' '}
          movies
        </p>
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
