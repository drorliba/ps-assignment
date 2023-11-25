import React from 'react';
import IconStar from '@/assets/IconStar';
import IconStarFill from '@/assets/IconStarFill';
import posters from '@/assets/media';
import './MovieDetails.css';
import TrailerModal from '@/components/TrailerModal/TrailerModal';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {

  return (
    <div
      className="movie-details"
      style={movie && {
        backgroundImage: `url("${posters[movie.episode_id].wide}")`
      }}
    >
      <div className="movie-details-wrapper">
        {movie && <>
          <div className="title-like-wrapper">
            <h2>{movie.title}</h2>
            <div className="fav-switch" onClick={() => onFavoriteToggle(movie)}>
              {favorites.some(fav => fav.episode_id === movie.episode_id) ? <IconStarFill /> : <IconStar />}
            </div>
          </div>
          <TrailerModal episodeId={movie.episode_id} />
        </>}
      </div>
    </div>
  );
}

export default MovieDetails;