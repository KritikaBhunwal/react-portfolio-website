import React from "react";

/**
 * Reusable Figma Embed Frame
 * @param {string} figmaUrl - The full public Figma file or prototype URL
 * @param {string|number} width - Width of the iframe (default: "100%")
 * @param {string|number} height - Height of the iframe (default: 600)
 */
const FigmaFrame = ({
  figmaUrl = "https://www.figma.com/proto/zk68g3A1tAjijn0ZlRo8Ti/Pixel-Pop-Studio-KritikaBhunwal?node-id=1-2&p=f&t=LVqz5OtcP7xXb3hQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  width = "100%",
  height = 600,
}) => {
  if (!figmaUrl) {
    return <p style={{ color: "red" }}>⚠️ Figma URL is missing.</p>;
  }

  // Convert the public Figma URL to embeddable format
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

  return (
    <div className="figma-frame-container" style={{ margin: "1rem 2rem" }}>
      <iframe
        title="Figma Preview"
        width={width}
        height={height}
        src={embedUrl}
        allowFullScreen
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "2rem",
        }}
      />
    </div>
  );
};

export default FigmaFrame;
