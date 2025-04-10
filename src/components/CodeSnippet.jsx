import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import PropTypes from "prop-types";

const CodeSnippet = ({ codeString, language = "javascript", showLineNumbers = true }) => {
  return (
    <div
      style={{
        width: "45vw",
        height: "600px",
        overflowY: "auto",
        margin: "1rem 2rem",
        borderRadius: "2rem",
      }}
    >
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

CodeSnippet.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string,
  showLineNumbers: PropTypes.bool,
};

export default CodeSnippet;
