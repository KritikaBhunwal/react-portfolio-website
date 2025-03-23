// SingleShareButton.jsx
import React from "react";

function SocialMediaShare({ shareUrl, shareTitle }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareTitle, // optional
          url: shareUrl,
        });
      } catch (error) {
        console.error("Error while sharing:", error);
      }
    } else {
      alert("Sharing is not supported in this browser. Please copy the link manually.");
    }
  };

  return (
    <button onClick={handleShare}>
      Share
    </button>
  );
}

export default SocialMediaShare;
