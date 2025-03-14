// import React from "react";
import Banner from "../components/Banner.jsx";
import SectionHeading from '../components/SectionHeading';
import ThreeDBanner from "../components/ThreeDBanner";
import Career from "../components/Career";
import WorkTogether from "../components/WorkTogether";


import "../styles/card.css";
import "../styles/home.css";
import FeaturedProjects from "../components/FeaturedProjects.jsx";

const Home = () => {
  return (
    <div className="p-4">
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
