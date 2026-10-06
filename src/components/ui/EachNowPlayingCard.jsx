import AgeRestriction from "./AgeRestriction";

const EachNowPlayingCard = ({ movie }) => {
  return (
    <div className="each-now-playing-card">
      <div className="now-playing-poster">
        <img src={movie.posterUrl} alt="" />
      </div>
      <div className="now-playing-detail">
        <p className="now-playing-title">{movie.title}</p>
        <p className="now-playing-info">
          {movie.genres[0].slug.charAt(0).toUpperCase() +
            movie.genres[0].slug.slice(1)}{" "}
          · {movie.runtimeMinutes} min
        </p>
      </div>
      <div className="now-playing-age">
        <AgeRestriction age={movie.ageRating.code} />
      </div>
      <p className="now-playing-synopsis">{movie.synopsis}</p>
      <div className="now-playing-card-footer">
        <p className="now-playing-price">from ₾{movie.fromPrice}</p>
        <p className="now-playing-button">Buy Ticket</p>
      </div>
    </div>
  );
};

export default EachNowPlayingCard;
