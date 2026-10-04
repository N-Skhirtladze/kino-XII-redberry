import AgeRestriction from "./AgeRestriction";
import HeroSessions from "./buttons/HeroSessions";
import Duration from "./Duration";
import Formats from "./Formats";
import HeroBuyTkt from "./buttons/HeroBuyTkt";


const HeroDescription = ({ style, title, age, duration, formats, synopsis }) => {
  return (
    <div className="hero-description" style={style}>
      <p className="premiere">PREMIERE · WEEK OF 15 SEPT</p>
      <p className="hero-title">{title}</p>
      <div className="hero-additional-info">
        <AgeRestriction age={age} />
        <Duration duration={duration} />
        <Formats formats={formats} />
      </div>
      <p className="hero-description-text">{synopsis}</p>
      <div className="hero-buttons">
        <HeroBuyTkt />
        <HeroSessions />
      </div>
    </div>
  );
};

export default HeroDescription;
