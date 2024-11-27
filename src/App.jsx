import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function buttonClick(clickedButton) {
    setSelectedTopic(clickedButton);
    // console.log(selectedTopic);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onButtonClick={() => buttonClick("components")}>
              Components
            </TabButton>
            <TabButton onButtonClick={() => buttonClick("jsx")}>JSX</TabButton>
            <TabButton onButtonClick={() => buttonClick("props")}>
              Props
            </TabButton>
            <TabButton onButtonClick={() => buttonClick("state")}>
              State
            </TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
