import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ codeString, language = "jsx", showLineNumbers = true }) => {
  return (
    <div className="code-snippet-container">
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

export default CodeSnippet;
