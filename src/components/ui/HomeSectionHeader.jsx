const HomeSectionHeader = ({ title }) => {
  return (
    <div className="home-section-header">
      <p className="home-section-title">{title}</p>
      <p className="home-section-see-all">See all</p>
    </div>
  );
};

export default HomeSectionHeader;