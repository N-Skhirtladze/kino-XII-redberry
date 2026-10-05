const EachSearchedMovie = ({ movie }) => {
  return (
    <div className="each-searched-movie">
      <img src={movie.posterUrl} alt="" className="searched-movie-poster"/>
      <div className="searched-movie-detail">
        <p className="searched-movie-title">{movie.title}</p>
        <p className="searched-movie-info">
          {movie.kind.charAt(0).toUpperCase() + movie.kind.slice(1)} ·{" "}
          {movie.ageRating.code} · {movie.runtimeMinutes} min
        </p>
      </div>
      <p
        className={`searched-price ${
          movie.isComingSoon ? "coming-soon" : null
        }`}
      >
        {movie.isComingSoon ? "Coming Soon" : `from ₾${movie.fromPrice}`}
      </p>
    </div>
  );
};

export default EachSearchedMovie;
