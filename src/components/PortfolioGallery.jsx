import React, { useState } from 'react';
import SubSectionHeading from '../components/SubSectionHeading';
import { SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiPaintBrush, GiDress } from 'react-icons/gi';

// Import portfolio images
import PF1 from '/Artwork01.jpg';
import PF2 from '/Artwork02.jpg';
import PF3 from '/Artwork03.jpg';
import PF4 from '/Artwork04.jpg';
import PF5 from '/Artwork05.jpg';
import PF6 from '/Artwork06.jpg';

import '../styles/portfolioGallery.css';

const PortfolioGallery = () => {
  // Updated images array with new title and description from process steps.
  const images = [
    {
      src: PF1,
      title: "Conceptual Sketching",
      description: "Designers explore ideas via sketches, experimenting with shapes, details, and styles to build a creative foundation."
    },
    {
      src: PF2,
      title: "Visual Inspiration Boards",
      description: "Designers compile mood, story, and color boards to capture inspiration, set tone, and guide material choices."
    },
    {
      src: PF3,
      title: "Fabric Selection",
      description: "Choosing the right fabric enhances functionality and style; designers consider use, season, audience, and properties."
    },
    {
      src: PF4,
      title: "Technical Flats & Specs",
      description: "Detailed technical drawings with stitching instructions, measurements, and annotations communicate design intent for precise construction."
    },
    {
      src: PF5,
      title: "Garment Assembly",
      description: "Designers collaborate with pattern makers and tailors, providing clear instructions and quality checks for flawless construction."
    },
    {
      src: PF6,
      title: "E-commerce Photoshoot",
      description: "A professional photoshoot captures garment details; models, lighting, and backdrops are chosen to enhance online appeal."
    }
  ];

  const behanceLinks = [
    {
      url: "https://www.behance.net/gallery/67138955/Brand-Presentation-Scarlet-Ross-by-Sujata-Maheshwari",
      text: "Brand Presentation – Scarlet Ross"
    },
    {
      url: "https://www.behance.net/gallery/68144575/Fashion-Illustration-Technical-Flats",
      text: "Fashion Illustration & Technical Flats"
    },
    {
      url: "https://www.behance.net/gallery/67111041/Social-Media-Campaign",
      text: "Social Media Campaign"
    },
    {
      url: "https://www.behance.net/gallery/67139281/3D-Fashion-Collages",
      text: "3D Fashion Collages"
    }
  ];

  const [activeImage, setActiveImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextImage = (e) => {
    e && e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e && e.stopPropagation();
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="gallery-container" style={{ marginLeft: '2rem' }}>
      <SubSectionHeading title="Portfolio Fashion Gallery" />
      <div className="gallery-inner">
        {/* Thumbnails */}
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.title}
              className={`thumbnail ${index === activeImage ? 'active' : ''}`}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
        {/* Preview */}
        <div className="gallery-preview">
          <button className="preview-prev" onClick={prevImage}>
            <FaChevronLeft />
          </button>
          <img
            src={images[activeImage].src}
            alt={images[activeImage].title}
            onClick={openModal}
          />
          <button className="preview-next" onClick={nextImage}>
            <FaChevronRight />
          </button>
        </div>
        {/* Info, Icons & Behance Links */}
        <div className="gallery-info">
          <h3>{images[activeImage].title}</h3>
          <p>{images[activeImage].description}</p>
          <div className="icon-section">
            <div className="icon-card">
              <SiAdobephotoshop />
              <span>Photoshop</span>
            </div>
            <div className="icon-card">
              <SiAdobeillustrator />
              <span>Illustrator</span>
            </div>
            <div className="icon-card">
              <GiPaintBrush />
              <span>Procreate</span>
            </div>
            <div className="icon-card">
              <GiDress />
              <span>Fashion</span>
            </div>
          </div>
          {/* Behance Links */}
          <div className="behance-links">
            <h4>More detailed projects on Behance:</h4>
            <ul>
              {behanceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Full-Screen Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <button className="modal-prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="modal-next" onClick={nextImage}>
              <FaChevronRight />
            </button>
            <div className="modal-model-container">
              <img
                src={images[activeImage].src}
                alt={images[activeImage].title}
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '2rem' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;
