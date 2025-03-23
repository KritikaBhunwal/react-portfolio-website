// SingleShareButton.jsx
import React from "react";

function SocialMediaShare({ title, shareUrl }) {
  // Click handler for the single "Share" button
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: shareUrl
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers without Web Share API support
      alert("Sharing is not supported in this browser. Please copy the URL manually.");
    }
  };

  return (
    <button className="single-share-button" onClick={handleShare}>
      Share
    </button>
  );
}

export default SocialMediaShare;
