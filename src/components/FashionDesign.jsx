import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import '../styles/fashionDesign.css';

// Design Collection Images
import clothing1 from '/clothing1.jpg';
import Artwork1 from '/Artwork1.jpg';
import clothing2 from '/clothing2.jpg';
import Artwork2 from '/Artwork2.jpg';
import clothing3 from '/clothing3.jpg';
import Artwork3 from '/Artwork3.jpg';
import clothing4 from '/clothing4.jpg';
import Artwork4 from '/Artwork4.jpg';
import clothing5 from './clothing5.jpg';
import Artwork5 from '/Artwork5.jpg';
import clothing6 from '/clothing6.jpg';
import Artwork6 from 'Artwork6.jpg';
import clothing7 from '/clothing7.jpg';
import Artwork7 from '/Artwork7.jpg';
import clothing8 from '/clothing8.jpg';
import Artwork8 from '/Artwork8.jpg';

// Process Slider Images
import Artwork01 from 'Artwork01.jpg';
import Artwork02 from '/Artwork02.jpg';
import Artwork03 from '/Artwork03.jpg';
import Artwork04 from '/Artwork04.jpg';
import Artwork05 from '/Artwork05.jpg';
import Artwork06 from '/Artwork06.jpg';

const designCards = [
  {
    id: 1,
    title: "Serenity Co-ords Skirt",
    description: "This skirt and top is made with lightweight rayon for a summery feeling – perfect for a weekend get-away.",
    realImage: clothing1,
    artworkImage: Artwork1,
  },
  {
    id: 2,
    title: "Blooming Co-ords Pants",
    description: "An embroidered co-ord set that adds a touch of shimmer for that limelight look.",
    realImage: clothing2,
    artworkImage: Artwork2,
  },
  {
    id: 3,
    title: "Floral Fizz Dress",
    description: "A breezy dress made with light rayon, ideal for a relaxed day out.",
    realImage: clothing3,
    artworkImage: Artwork3,
  },
  {
    id: 4,
    title: "Scalloped Neck Top",
    description: "A laced scalloped top paired with denim for a chic, casual look.",
    realImage: clothing4,
    artworkImage: Artwork4,
  },
  {
    id: 5,
    title: "Serenity Jumpsuit",
    description: "A classic jumpsuit blending comfort with style for any occasion.",
    realImage: clothing5,
    artworkImage: Artwork5,
  },
  {
    id: 6,
    title: "Tasseled Co-ords Pants",
    description: "A charming set perfect for an evening outing, exuding chic elegance.",
    realImage: clothing6,
    artworkImage: Artwork6,
  },
  {
    id: 7,
    title: "Floral Fizz Dress",
    description: "A floral printed dress designed to impress with its vibrant appeal.",
    realImage: clothing7,
    artworkImage: Artwork7,
  },
  {
    id: 8,
    title: "Serenity Dress",
    description: "An A-line dress that merges timeless style with modern flair.",
    realImage: clothing8,
    artworkImage: Artwork8,
  },
];

const processSteps = [
  {
    id: 1,
    title: "Step One: Sketching Out Ideas",
    description: "Initial sketches capture the creative vision.",
    image: Artwork01,
  },
  {
    id: 2,
    title: "Step Two: Creating Inspiration Board",
    description: "Moodboards and color boards set the overall tone.",
    image: Artwork02,
  },
  {
    id: 3,
    title: "Step Three: Selecting the Right Fabric",
    description: "Fabric selection ensures quality and comfort.",
    image: Artwork03,
  },
  {
    id: 4,
    title: "Step Four: Technical Drawings",
    description: "Detailed drawings provide the blueprint for production.",
    image: Artwork04,
  },
  {
    id: 5,
    title: "Step Five: Final Garment Construction",
    description: "Designs are refined and produced with precision.",
    image: Artwork05,
  },
  {
    id: 6,
    title: "Step Six: Photoshoot & Sales",
    description: "Professional photoshoots showcase the final product.",
    image: Artwork06,
  },
];

const FashionDesign = () => {
  const [activeProcess, setActiveProcess] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openProcessModal = () => setModalOpen(true);
  const closeProcessModal = () => setModalOpen(false);
  const nextProcess = (e) => {
    e && e.stopPropagation();
    setActiveProcess((prev) => (prev + 1) % processSteps.length);
  };
  const prevProcess = (e) => {
    e && e.stopPropagation();
    setActiveProcess((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <div className="fashion-design-container">
      {/* Banner Section */}
      <div className="fd-banner">
        <img src={bannerGif} alt="Dress to Impress Banner" className="fd-banner-img" />
        <div className="fd-banner-text">
          <h1>Dress to Impress</h1>
          <p>
            Presenting a curated collection of womenswear designs that merge vibrant trends with timeless elegance.
          </p>
        </div>
      </div>

      {/* Design Collection Section */}
      <SectionHeading title="Design Collection" />
      <div className="design-cards">
        {designCards.map((card) => (
          <div className="design-card" key={card.id}>
            <div className="card-images">
              <img src={card.realImage} alt={`${card.title} Real`} className="card-real" />
              <img src={card.artworkImage} alt={`${card.title} Sketch`} className="card-artwork" />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <SectionHeading title="Fashion Design Process" />
      <div className="process-section">
        <div className="process-text">
          <div className="process-column left">
            <p>
              My design process starts with comprehensive research and sketching to capture innovative ideas. Every line and curve is refined to perfection.
            </p>
          </div>
          <div className="process-column right">
            <p>
              I collaborate with pattern makers and fabric experts to transform sketches into tangible garments, ensuring that each design is both functional and aesthetically compelling.
            </p>
          </div>
        </div>
        <div className="process-carousel">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`process-step ${index === activeProcess ? "active" : ""}`}
              onClick={() => setActiveProcess(index)}
            >
              <img src={step.image} alt={step.title} />
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
          <button className="process-prev" onClick={prevProcess}>Prev</button>
          <button className="process-next" onClick={nextProcess}>Next</button>
          <button className="process-fullview" onClick={openProcessModal}>Full View</button>
        </div>
      </div>

      {/* Process Full-Screen Modal */}
      {modalOpen && (
        <div className="process-modal-overlay" onClick={closeProcessModal}>
          <div className="process-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProcessModal}>X</button>
            <button className="modal-prev" onClick={prevProcess}>Prev</button>
            <button className="modal-next" onClick={nextProcess}>Next</button>
            <div className="modal-image-container">
              <img
                src={processSteps[activeProcess].image}
                alt={processSteps[activeProcess].title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionDesign;
