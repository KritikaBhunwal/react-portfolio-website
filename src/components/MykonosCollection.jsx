import React from 'react';
import '../styles/mykonosCollection.css';

import artwork1 from '../assets/images/Artwork1.jpg';
import artwork2 from '../assets/images/Artwork2.jpg';
import artwork3 from '../assets/images/Artwork3.jpg';
import artwork4 from '../assets/images/Artwork4.jpg';
import artwork5 from '../assets/images/Artwork5.jpg';
import artwork6 from '../assets/images/Artwork6.jpg';
import artwork7 from '../assets/images/Artwork7.jpg';
import artwork8 from '../assets/images/Artwork8.jpg';

import clothing1 from '../assets/images/clothing1.jpg';
import clothing2 from '../assets/images/clothing2.jpg';
import clothing3 from '../assets/images/clothing3.jpg';
import clothing4 from '../assets/images/clothing4.jpg';
import clothing5 from '../assets/images/clothing5.jpg';
import clothing6 from '../assets/images/clothing6.jpg';
import clothing7 from '../assets/images/clothing7.jpg';
import clothing8 from '../assets/images/clothing8.jpg';

const collectionItems = [
  {
    id: 1,
    title: "Serenity Co-ords Skirt",
    description:
      "This skirt and top is made with lightweight rayon for a summery light feeling. Perfect for a weekend get-away.",
    artwork: artwork1,
    clothing: clothing1,
  },
  {
    id: 2,
    title: "Blooming Co-ords Pants",
    description:
      "An embroidered co-ord set designed to add shimmer for a limelight look.",
    artwork: artwork2,
    clothing: clothing2,
  },
  {
    id: 3,
    title: "Floral Fizz Dress",
    description:
      "A breezy dress perfect for a day out, made with lightweight rayon.",
    artwork: artwork3,
    clothing: clothing3,
  },
  {
    id: 4,
    title: "Scalloped Neck Top",
    description:
      "A laced top paired with denim for a chic, casual look.",
    artwork: artwork4,
    clothing: clothing4,
  },
  {
    id: 5,
    title: "Serenity Jumpsuit",
    description:
      "A classic jumpsuit blending comfort and style for any occasion.",
    artwork: artwork5,
    clothing: clothing5,
  },
  {
    id: 6,
    title: "Tasseled Co-ords Pants",
    description:
      "A charming set perfect for an elegant, cozy evening.",
    artwork: artwork6,
    clothing: clothing6,
  },
  {
    id: 7,
    title: "Floral Fizz Dress",
    description:
      "A floral printed dress designed to impress.",
    artwork: artwork7,
    clothing: clothing7,
  },
  {
    id: 8,
    title: "Serenity Dress",
    description:
      "An A-line dress merging classic chic with modern style.",
    artwork: artwork8,
    clothing: clothing8,
  },
];

const MykonosCollection = () => {
  return (
    <div className="mykonos-collection">
      <div className="collection-carousel">
        {collectionItems.map((item) => (
          <div className="collection-card" key={item.id}>
            <div className="image-container">
              <img src={item.artwork} alt={`${item.title} Artwork`} className="artwork" />
              <img src={item.clothing} alt={`${item.title} Clothing`} className="clothing" />
            </div>
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swipe-indicator"></div>
      {/* className="swipe-indicator" */}
    </div>
  );
};

export default MykonosCollection;
