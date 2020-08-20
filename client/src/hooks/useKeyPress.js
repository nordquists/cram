import React, { useState } from "react";

export const useKeyPress = function(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);
  
    function downHandler(e) {
      e.preventDefault()
      if (e.key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    const upHandler = (e) => {
      e.preventDefault()
      if (e.key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    React.useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
  
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });
  
    return keyPressed;
  };

export default useKeyPress;