## Solution

1. **Debugging:**
    - In App: The prop onFavoriteToggle wasn't passed to the MovieDetails component. So when a like button was clicked, nothing happened. So I added this function as a prop.
    - In MovieItem: The movie selected wasn't passed to the onMovieSelect function, so It couldn't be set in a state and therefore to be disaplayed. No I give it to the function as needed.

3. **Improvements:**
    - Added "Play trailer" button. Upon clicking it opens a modal with a YouTube player that shows the movie's trailer.
    - Replaced the "loading" inscription with a loading skeleton.