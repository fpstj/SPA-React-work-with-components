import logo from "./logo.svg";
import "./App.css";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function generateRandomInt(num) {
  return Math.floor(Math.random() * (num + 1));
}

function Header() {
  const reactDescription = reactDescriptions[generateRandomInt(2)];

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription} React concepts that you will need for almost any
        application you are going to build!
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.imgage} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
