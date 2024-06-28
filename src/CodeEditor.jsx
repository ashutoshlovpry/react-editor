import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./CodeEditor.css";

const initialCode = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`;

const CodeEditor = () => {
  const [code, setCode] = useState(initialCode);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <div>
        <textarea
          value={code}
          onChange={handleChange}
          spellCheck="false"
          className="code-input"
        />
      </div>
      <div className="code-output">
        <Highlight theme={themes.shadesOfPurple} code={code} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="line-number">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeEditor;
