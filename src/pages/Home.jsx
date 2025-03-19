// import React from "react";
import Banner from "../components/Banner.jsx";
import SectionHeading from '../components/SectionHeading.jsx';
import ThreeDBanner from "../components/ThreeDBanner.jsx";
import Career from "../components/Career.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import WorkTogether from "../components/WorkTogether.jsx";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <SectionHeading title="My Work" />
      <ThreeDBanner />
      <Career />
      <SectionHeading title="Featured Projects" />
      <FeaturedProjects />
      <SectionHeading title="Let's Connect" />
      <WorkTogether />
    </div>
  );
};

export default Home;
