
import { useState } from "react";

function App() {
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [radius, setRadius] = useState("");

  const rectangleArea = length * breadth;
  const circleArea = 3.14 * radius * radius;

  return (
    <div>
      <h2>Area of Rectangle</h2>

      <input
        type="number"
        placeholder="Enter length"
        onChange={(e) => setLength(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter breadth"
        onChange={(e) => setBreadth(e.target.value)}
      />

      <h3>Rectangle Area: {rectangleArea}</h3>

      <hr />

      <h2>Area of Circle</h2>

      <input
        type="number"
        placeholder="Enter radius"
        onChange={(e) => setRadius(e.target.value)}
      />

      <h3>Circle Area: {circleArea}</h3>
    </div>
  );
}

export default App;
