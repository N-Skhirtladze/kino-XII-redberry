import EachSearchedMovie from "./EachSearchedMovie";

const ResultMovies = ({ movies }) => {
  return (
    <div className="result-movies">
      <div className="result-movies-header">
        <p className="films-and-events">FILMS & EVENTS</p>
        <p className="result-amount">{movies.length} results</p>
      </div>
      <div className="display-searched-movies">
        {movies.map((movie) => (
          <EachSearchedMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default ResultMovies;
