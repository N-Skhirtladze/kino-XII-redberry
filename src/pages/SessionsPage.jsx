import FilterAside from "../components/layout/FilterAside";
import Header from "../components/layout/Header";

const SessionsPage = () => {
  return (
    <>
      <Header />
      <div className="sessions-page-title">
        <h1>Sessions</h1>
        <p>Browse showtimes across all venues</p>
      </div>
      <div className="sessions-page-content">
        <FilterAside />
        <div className="sessions-page-movies">
          {/* Movies will be displayed here */}
        </div>
      </div>
    </>
  );
};

export default SessionsPage;

