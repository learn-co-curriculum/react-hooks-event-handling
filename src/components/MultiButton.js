import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick}>Button 2</button>
      <button onClick={handleClick}>Button 3</button>
    </div>
  );
}

export default MultiButton;
