import './App.css';
import Header from './components/layout/Header';
import ComingSoon from './components/sections/ComingSoon';
import HeroSection from './components/sections/HeroSection';
import NowPlaying from './components/sections/NowPlaying';

function App() {


  return (
    <>
      <Header />
      <HeroSection />
      <NowPlaying />
      <ComingSoon />
    </>
  )
};

export default App;
