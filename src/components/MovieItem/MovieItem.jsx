import React from 'react';
import posters from '@/assets/media';
import './MovieItem.css';

function MovieItem({ movie, onMovieSelect }) {

  return (
    <div
      key={movie.episode_id}
      className="movie-item"
    >
      <div
        className="movie-card"
        style={{
          backgroundImage: `url("${posters[movie.episode_id].small}")`
        }}
        onClick={() => onMovieSelect(movie)}
      >
        {/*DROR: The movie selected wasn't given to the function, so It couldn't be set in a state and therefore to be disaplayed. No I give it to the function as needed*/}
        <div className="movie-title">{movie.title}</div>
      </div>
    </div>
  );
}

export default MovieItem;