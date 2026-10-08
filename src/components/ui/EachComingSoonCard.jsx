import NotifyMe from "./buttons/NotifyMe";
import AgeRestriction from "./AgeRestriction";

const EachComingSoonCard = ({ movie }) => {
  return (
    <div className="each-coming-soon-card">
      <img src={movie.backdropUrl} alt="" />
      <div className="coming-soon-right-side">
        <div className="coming-soon-detail">
          <p className="coming-date">IN CINEMAS 2 OCTOBER</p>
          <p className="coming-soon-title">{movie.title}</p>
          <p className="coming-soon-info">
            {movie.genres[0].slug.charAt(0).toUpperCase() +
              movie.genres[0].slug.slice(1)}{" "}
            · {movie.runtimeMinutes} min
          </p>
          <div className="coming-soon-age">
            <AgeRestriction age={movie.ageRating.code} />
          </div>
        </div>
        <NotifyMe />
      </div>
    </div>
  );
};

export default EachComingSoonCard;
