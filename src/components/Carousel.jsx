import { motion } from 'framer-motion';

const Carousel = ({ images }) => {
  return (
    <motion.div className="carousel">
      {images.map((image, index) => (
        <motion.img 
          key={index} 
          src={image} 
          alt={`carousel-image-${index}`} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </motion.div>
  );
};

export default Carousel;
