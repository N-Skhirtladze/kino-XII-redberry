import HeroDescription from "../ui/HeroDescription";
import { useState, useEffect } from "react";
import { getHeroMovies } from "../../services/movie";
import CarouselNavigation from "../ui/CarouselNavigation";

const HeroSection = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(false);

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data, currentIndex]);

  return (
    <section className="hero-section">
      {data.map((movie, i) => (
        <div
          key={movie.id}
          style={{ opacity: i === currentIndex ? 1 : 0 }}
          className="each-hero-movie"
        >
          <img src={movie?.backdropUrl} alt="" className="hero-image" />
          <div className="for-linear"></div>
          <HeroDescription
            title={movie.title}
            age={movie.ageRating.code}
            duration={movie.runtimeMinutes}
            formats={movie.formats}
            synopsis={movie.synopsis}
          />
        </div>
      ))}
      <CarouselNavigation
        setCurrentIndex={setCurrentIndex}
        index={currentIndex}
      />
    </section>
  );
};

export default HeroSection;
