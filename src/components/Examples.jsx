import React, { useState } from "react";
import { EXAMPLES } from "../data-with-examples";
import TabButton from "./TabButton";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function buttonClick(clickedButton) {
    setSelectedTopic(clickedButton);
  }

  const example = EXAMPLES[selectedTopic] || {
    title: "Not Found",
    description: "No example available for this topic.",
    code: "// No code example",
  };

  let tabContent = (
    <p className="left-align">
      Please select topic by clicking on one of the buttons above.
    </p>
  );

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content" className="left-align">
        <h3>{example.title}</h3>
        <p>{example.description}</p>
        <pre>
          <code>{example.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onButtonClick={() => buttonClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onButtonClick={() => buttonClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onButtonClick={() => buttonClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onButtonClick={() => buttonClick("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}

export default Examples;
