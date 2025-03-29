import  { useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageBanner = ({
  baseImage,
  topImage,
  baseAlt = 'Base Banner',
  topAlt = 'Top Banner',
  bannerClass = 'image-banner'
}) => {
  useEffect(() => {
    const banner = document.querySelector(`.${bannerClass}`);
    if (!banner) return;
    const handleMouseMove = (e) => {
      const rect = banner.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      banner.style.setProperty('--x', `${x}px`);
      banner.style.setProperty('--y', `${y}px`);
    };

    banner.addEventListener('mousemove', handleMouseMove);
    return () => banner.removeEventListener('mousemove', handleMouseMove);
  }, [bannerClass]);

  return (
    <div
      className={bannerClass}
      style={{ marginLeft: '2rem', marginRight: '2rem' }}
    >
      <img src={baseImage} alt={baseAlt} className="base-image" />
      <img src={topImage} alt={topAlt} className="top-image" />
    </div>
  );
};

ImageBanner.propTypes = {
  baseImage: PropTypes.string.isRequired,
  topImage: PropTypes.string.isRequired,
  baseAlt: PropTypes.string,
  topAlt: PropTypes.string,
  bannerClass: PropTypes.string
};

export default ImageBanner;
