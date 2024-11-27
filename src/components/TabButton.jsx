import React from "react";

function Buttons({ children, onButtonClick }) {
  return (
    <li>
      <button onClick={onButtonClick}>{children}</button>
    </li>
  );
}

export default Buttons;
