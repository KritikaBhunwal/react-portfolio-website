import React from "react";
import "../styles/graphicsProjects.css";

// Import images
import gdWork1a from "/GD-Work-1a.jpg";
import gdWork1b from "/GD-Work-1b.jpg";
import gdWork2a from "/GD-Work-2a.jpg";
import gdWork2b from "/GD-Work-2b.jpg";
import gdWork3a from "/GD-Work-3a.jpg";
import gdWork3b from "/GD-Work-3b.jpg";
import gdWork4a from "/GD-Work-4a.jpg";
import gdWork4b from "/GD-Work-4b.jpg";
import gdWork5a from "/GD-Work-5a.jpg";
import gdWork5b from "/GD-Work-5b.jpg";
import gdWork6a from "/GD-Work-6a.jpg";
import gdWork6b from "/GD-Work-6b.jpg";

const graphicsProjects = [
  {
    id: 1,
    title: "Emailer Design for a Mental Health App",
    description:
      "A series of emailer designs and social media posts created for multiple campaigns for the mental health app, Mindhouse.",
    artwork: gdWork1a,
    design: gdWork1b,
    link: "https://www.behance.net/gallery/113232829/Mindhouse-Mailers?gridItemId=84192703&action=moodboard",
  },
  {
    id: 2,
    title: "Social Media Post Design for a Fashion Brand",
    description:
      "A set of social media posts created to showcase designs from a resortwear SS17 collection by Scarlet Ross, inspired by Mykonos island.",
    artwork: gdWork2a,
    design: gdWork2b,
    link: "https://www.behance.net/gallery/67111041/Social-Media-Campaign",
  },
  {
  id: 3,
  title: "Instagram Proposal for a Restaurant",
  description:
    "A proposal created for Imperfecto Patio, a restaurant in India, to revamp their Instagram feed with a fresh look and feel.",
  artwork: gdWork3a,
  design: gdWork3b,
  link: "https://www.behance.net/gallery/141238173/Instagram-Proposal-Imperfecto-Patio",
},
{
  id: 4,
  title: "VM Creative Proposal for Footwear Store",
  description:
    "A series of visual merchandising creatives designed for Birkenstock, inspired by the theme of 'Lightweight Footwear'.",
  artwork: gdWork4a,
  design: gdWork4b,
  link: "https://www.behance.net/gallery/133181089/Birkenstock-VM-Creatives",
},
{
id: 5,
title: "Packaging and Creatives for a Bakery Brand",
description:
  "A packaging design and creatives created for The Cake Story, a bakery brand, inspired by the theme of 'Celebration'.",
artwork: gdWork5a,
design: gdWork5b,
link: "https://www.behance.net/gallery/133114873/Packaging-and-Creatives-for-The-Cake-Story",
},
{
id: 6,
title: "Social Media Creatives for Real Estate Brands",
description:
  "A series of social media creatives designed for NinYanWays and InterDecore, real estate brands, to showcase their properties.",
artwork: gdWork6a,
design: gdWork6b,
link: "https://www.behance.net/gallery/133120203/Social-Media-Creatives-NinYanWays-InterDecore",
},
];

const GraphicsProjects = () => {
  return (
    <div className="graphics-projects">
      <div className="graphics-carousel">
        {graphicsProjects.map((project) => (
          <div className="graphics-card" key={project.id}>
            <div className="image-container">
              <img
                src={project.artwork}
                alt={`${project.title} Artwork`}
                className="artwork"
              />
              <img
                src={project.design}
                alt={`${project.title} Design`}
                className="design"
              />
            </div>
            <div className="card-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="explore-link"
              >
                Explore on Behance →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicsProjects;
