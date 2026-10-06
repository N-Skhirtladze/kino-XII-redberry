import { useEffect, useRef, useState } from "react";
import { getNowPlaying } from "../../services/movie";
import EachNowPlayingCard from "../ui/EachNowPlayingCard";
import HomeSectionHeader from "../ui/HomeSectionHeader";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const listRef = useRef(null);
  const [leftShadow, setLeftShadow] = useState(false);
  const [rightShadow, setRightShadow] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data);
    };

    fetchNowPlaying();
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
    <div className={`now-playing ${leftShadow ? "shadow-left" : null} ${rightShadow ? "shadow-right" : null}`}>
      <HomeSectionHeader title={"NOW PLAYING"} />
      <div
        className="now-playing-list"
        ref={listRef}
      >
        {nowPlaying.map((movie) => (
          <EachNowPlayingCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
