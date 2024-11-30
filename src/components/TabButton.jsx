import React from "react";

function Buttons({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}

export default Buttons;
