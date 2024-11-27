import React from "react";

function Buttons({ children, onButtonClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onButtonClick}>
        {children}
      </button>
    </li>
  );
}

export default Buttons;
