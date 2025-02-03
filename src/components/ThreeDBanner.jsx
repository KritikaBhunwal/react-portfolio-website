// src/components/ThreeDBanner.jsx
import React from 'react';

// Import assets (ensure the file extensions match your files)
import modelSrc from '../assets/models/GD_Comp2.glb';
import skyboxImage from '../assets/images/AdobeStock_bg.png';

// Import the CSS for this component
import '../styles/3DBanner.css';

const ThreeDBanner = () => {
  return (
    <div className="banner-container">
      
      {/* 3D Model Viewer */}
      <div className="model-container">
        <model-viewer
          src={modelSrc}
          skybox-image={skyboxImage}
          camera-controls
          touch-action="pan-y"
          style={{ width: '100%', height: '100%' }}
        ></model-viewer>
      </div>

      

      <p className="banner-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, libero nec blandit tincidunt, arcu ex imperdiet justo, at tempor neque ligula a ligula. Proin at est eget nisl interdum fermentum. Aliquam erat volutpat. Mauris eget odio sed purus fermentum tincidunt. 
      </p>
    </div>
  );
};

export default ThreeDBanner;
