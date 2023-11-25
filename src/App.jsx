import { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import posters from '@/assets/media';
import './App.css';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <div
        className="background-image"
        style={selectedMovie ? {
          backgroundImage: `url("${posters[selectedMovie.episode_id].wide}")`
        }
          : {
            backgroundImage: `url("${posters.opening}")`
          }
        }
      ></div>
      <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite} /> {/*DROR: The prop onFavoriteToggle for the MovieDetails component was missing. So when a like button was clicked, nothing happened. So I added this function as a prop. */}
      <MovieList onMovieSelect={handleMovieSelect} />
    </div>
  );

}

export default App;