import React, { useRef } from "react";

function App() {
  const boxRef = useRef(null);

  const changeShape = () => {
    boxRef.current.style.borderRadius = "50%";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "purple",
          margin: "20px"
        }}
      ></div>

      <button onClick={changeShape}>
        Convert to Circle
      </button>
    </div>
  );
}

export default App;
