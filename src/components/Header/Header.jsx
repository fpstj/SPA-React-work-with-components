import logo from "../../assets/react-core-concepts.png";
import "./Header.css";

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
    </header>
  );
}

export default Header;
