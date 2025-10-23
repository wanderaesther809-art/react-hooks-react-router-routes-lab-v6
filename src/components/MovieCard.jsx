
import PropTypes from "prop-types"; // ← import PropTypes

function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <a href={`/movie/${movie.id}`}>View Info</a>
    </article>
  );
}

// ✅ Add prop validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;

