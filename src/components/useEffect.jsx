import React, { useState, useEffect } from "react";

const Resize = () => {
  const [currentWidth, setWidth] = useState(window.innerWidth);
  return (
    <>
      <h1>The Width of Window Screen is {currentWidth}</h1>
    </>
  );
};

export default Resize;
