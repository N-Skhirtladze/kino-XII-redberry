import { useEffect, useRef, useState } from "react";
import HomeSectionHeader from "../ui/HomeSectionHeader";
import { getComingSoon } from "../../services/movie";
import EachComingSoonCard from "../ui/EachComingSoonCard";

const ComingSoon = () => {
  const [movies, setMovies] = useState([]);
  const listRef = useRef(null);
  const [leftShadow, setLeftShadow] = useState(false);
  const [rightShadow, setRightShadow] = useState(true);

  useEffect(() => {
    const fetchComingSoon = async () => {
      const data = await getComingSoon();
      setMovies(data);
    };

    fetchComingSoon();
  }, []);

  useEffect(() => {
    const list = listRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      list.scrollLeft += e.deltaY;
      if (list.scrollLeft > 0) {
        setLeftShadow(true);
      } else {
        setLeftShadow(false);
      }
      if (list.scrollLeft + list.clientWidth < list.scrollWidth) {
        setRightShadow(true);
      } else {
        setRightShadow(false);
      }
    };

    list.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      list.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={`coming-soon-section ${leftShadow ? "shadow-left" : null} ${rightShadow ? "shadow-right" : null}`}>
      <HomeSectionHeader title={"COMING SOON..."} />
      <div className="coming-soon-list" ref={listRef}>
        {movies.map((movie) => (
          <EachComingSoonCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
