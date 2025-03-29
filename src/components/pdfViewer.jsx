import PropTypes from "prop-types";

const PDFViewer = ({ src, width = "100%", height = "600px" }) => {
    return (
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: "none" }}
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
  