import React, { useState, useEffect } from 'react';
import { SiAdobephotoshop } from 'react-icons/si';
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiDress } from 'react-icons/gi';
import SubSectionHeading from '../components/SubSectionHeading';

import FS1 from '/FashionStyling1.jpg';
import FS2 from '/FashionStyling2.jpg';
import FS3 from '/FashionStyling3.jpg';
import FS4 from '/FashionStyling4.jpg';
import FS5 from '/FashionStyling5.jpg';
import FS6 from '/FashionStyling6.jpg';
import FS7 from '/FashionStyling7.jpg';

import '../styles/gallery.css';

const Gallery = () => {
  // Reverse the sequence by reversing the array
  const images = [
    { src: FS1, title: "Styling Inspo 1", description: "Placeholder text to explain that image." },
    { src: FS2, title: "Styling Inspo 2", description: "Placeholder text to explain that image." },
    { src: FS3, title: "Styling Inspo 3", description: "Placeholder text to explain that image." },
    { src: FS4, title: "Styling Inspo 4", description: "Placeholder text to explain that image." },
    { src: FS5, title: "Styling Inspo 5", description: "Placeholder text to explain that image." },
    { src: FS6, title: "Styling Inspo 6", description: "Placeholder text to explain that image." },
    { src: FS7, title: "Styling Inspo 7", description: "Placeholder text to explain that image." }
  ].reverse();

  const [activeImage, setActiveImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // --- Mobile Layout ---
  const mobileView = (
    <div className="gallery-container" style={{ margin: '0 2rem' }}>
      <SubSectionHeading title="Image Gallery" />

      {/* Carousel Preview (Horizontal) */}
      <div className="carousel-preview" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <button className="preview-prev" onClick={prevImage}>
          <FaChevronLeft />
        </button>
        <img
          src={images[activeImage].src}
          alt={images[activeImage].title}
          onClick={openModal}
          style={{ maxWidth: '100%', margin: '0 1rem' }}
        />
        <button className="preview-next" onClick={nextImage}>
          <FaChevronRight />
        </button>
      </div>

      {/* Full-Width Thumbnails */}
      <div className="gallery-thumbnails" style={{ width: '100%', marginBottom: '1rem' }}>
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

      {/* Styling Inspo Section - Left Aligned */}
      <div className="gallery-info" style={{ padding: '1rem 0', textAlign: 'left' }}>
        <h3>{images[activeImage].title}</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
          {images[activeImage].description}
        </p>
        <div className="icon-section" style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem' }}>
          <div className="icon-card">
            <SiAdobephotoshop size={24} />
            <span>Photoshop</span>
          </div>
          <div className="icon-card">
            <FaShoppingCart size={24} />
            <span>Ecommerce</span>
          </div>
          <div className="icon-card">
            <GiDress size={24} />
            <span>Fashion</span>
          </div>
        </div>
      </div>

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

  // --- Original (Tablet/Desktop) Layout ---
  const desktopView = (
    <div className="gallery-container" style={{ marginLeft: '2rem' }}>
      <SubSectionHeading title="Image Gallery" />
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

        {/* Info & Icons - Already Left Aligned via CSS */}
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

  return isMobile ? mobileView : desktopView;
};

export default Gallery;
