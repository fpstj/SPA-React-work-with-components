import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data-with-examples";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
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
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
