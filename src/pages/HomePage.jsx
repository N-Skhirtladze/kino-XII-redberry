import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ComingSoon from '../components/sections/ComingSoon';
import HeroSection from '../components/sections/HeroSection';
import NowPlaying from '../components/sections/NowPlaying';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <NowPlaying />
      <ComingSoon />
      <Footer />
    </>
  );
};

export default HomePage;
