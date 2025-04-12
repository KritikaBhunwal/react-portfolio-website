import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
// import FeaturedProjects from '../components/FeaturedProjects';
import { SiAdobephotoshop } from 'react-icons/si';
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiDress } from 'react-icons/gi';

// Import gallery images (FashionStyling1 to FashionStyling7)
import FS1 from '/FashionStyling1.jpg';
import FS2 from '/FashionStyling2.jpg';
import FS3 from '/FashionStyling3.jpg';
import FS4 from '/FashionStyling4.jpg';
import FS5 from '/FashionStyling5.jpg';
import FS6 from '/FashionStyling6.jpg';
import FS7 from '/FashionStyling7.jpg';

import '../styles/fashionStyling.css';

const FashionStyling = () => {
  const images = [
    { src: FS1, title: "Styling Inspo 1", description: "Placeholder text to explain that image." },
    { src: FS2, title: "Styling Inspo 2", description: "Placeholder text to explain that image." },
    { src: FS3, title: "Styling Inspo 3", description: "Placeholder text to explain that image." },
    { src: FS4, title: "Styling Inspo 4", description: "Placeholder text to explain that image." },
    { src: FS5, title: "Styling Inspo 5", description: "Placeholder text to explain that image." },
    { src: FS6, title: "Styling Inspo 6", description: "Placeholder text to explain that image." },
    { src: FS7, title: "Styling Inspo 7", description: "Placeholder text to explain that image." }
  ];

  const projectTitle = "Elevate Your Style: Premier Fashion Styling Project for E-commerce";

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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="fashion-container">
      {/* Description Section */}
      <div className="description-section">
        <div className="left-description">
          <h2 className="section-title">{projectTitle}</h2>
          <p>
            In my role as an online stylist, I curated fashion looks for projects – Black is Pink and Baggout – to guide shoppers in making informed wardrobe choices. I crafted ensembles tailored to diverse occasions, budgets, and personalities.
          </p>
        </div>
        <div className="right-highlights">
          <h2 className="section-title">Highlights</h2>
          <ul>
            <li><strong>Versatility:</strong> Suitable for various events.</li>
            <li><strong>Budget Consideration:</strong> Cost-effective without compromising style.</li>
            <li><strong>Personalization:</strong> Tailored recommendations.</li>
            <li><strong>Trend Awareness:</strong> Modern, chic elements.</li>
            <li><strong>Accessory Coordination:</strong> Complementary accessories.</li>
          </ul>
        </div>
      </div>

      {/* Gallery Section */}
      <SectionHeading title="Image Gallery" />
      <div className="gallery-container">
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

          {/* Info & Icons */}
          <div className="gallery-info">
            <h3>{images[activeImage].title}</h3>
            <p>{images[activeImage].description}</p>
            <div className="icon-section">
              <div className="icon-card">
                <SiAdobephotoshop />
                <span>Photoshop</span>
              </div>
              <div className="icon-card">
                <FaShoppingCart />
                <span>Ecommerce</span>
              </div>
              <div className="icon-card">
                <GiDress />
                <span>Fashion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✖</button>
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

export default FashionStyling;
