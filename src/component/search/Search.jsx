// import React, { useState, useEffect } from 'react';
// import { RiSearchLine } from 'react-icons/ri';
// import movies from './movies';
// import './search.css';

// function SearchComponent() {
//   const [searchText, setSearchText] = useState('');
//   const [numMatches, setNumMatches] = useState(0);

//   const handleSearchInput = (event) => {
//     setSearchText(event.target.value);
//   };

//   const filteredMovies = movies.filter(
//     (movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()),
//   );

//   useEffect(() => {
//     setNumMatches(filteredMovies.length);
//   }, [filteredMovies]);

//   return (
//     <div className="main-container">
//       <div className="search-container">
//         <input type="text" placeholder="Search movies..."
// value={searchText} onChange={handleSearchInput} />
//         <RiSearchLine style={{ fontSize: '2.2rem', color: '#43ce54' }} />
//       </div>
//       <p>
//         Number of matches:
//         {numMatches}
//       </p>
//       <ul className="movie-list">
//         {filteredMovies.map((movie) => (
//           <li key={movie.title}>
//             {movie.title}
//             (
//             {movie.year}
//             )
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
