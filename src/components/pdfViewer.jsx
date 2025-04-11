import PropTypes from "prop-types";

const PDFViewer = ({ src, width = "70%", height = "684px" }) => {
  return (
    <iframe
    src={src}
    width={width}
    height={height}
    style={{ border: "none", borderRadius: "2rem", marginLeft: "2rem", padding: "1rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.04)" }}
    title="PDF Viewer"
    />
  );
  };

PDFViewer.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default PDFViewer;
  