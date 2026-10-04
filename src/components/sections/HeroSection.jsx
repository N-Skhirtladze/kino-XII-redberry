import HeroDescription from "../ui/HeroDescription";
import { useState, useEffect } from "react";
import { getHeroMovies } from "../../services/movie";
import CarouselNavigation from "../ui/CarouselNavigation";

const HeroSection = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchHeroMovies = async () => {
      const heroMovies = await getHeroMovies();
      setData(heroMovies);
    };

    fetchHeroMovies();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {
    if (time === 5) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setTime(0);
    }
  }, [time]);

  return (
    <section className="hero-section">
      <div className="for-linear"></div>
      {data.map((movie, i) => (
        <div key={movie.id} className="each-hero-movie">
          <img
            src={movie?.backdropUrl}
            alt=""
            className="hero-image"
            style={{ opacity: i === currentIndex ? 1 : 0 }}
          />
          <HeroDescription
            style={{ display: i === currentIndex ? "flex" : "none "}}
            title={movie.title}
            age={movie.ageRating.code}
            duration={movie.runtimeMinutes}
            formats={movie.formats}
            synopsis={movie.synopsis}
          />
        </div>
      ))}
      <CarouselNavigation setTime={setTime} setCurrentIndex={setCurrentIndex} index={currentIndex} />
    </section>
  );
};

export default HeroSection;
