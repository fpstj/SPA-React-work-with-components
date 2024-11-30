import React, { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data-with-examples";

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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => buttonClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => buttonClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => buttonClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => buttonClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
