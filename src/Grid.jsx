import { createContext, useContext, useState } from "react";
import "./Grid.css";
import Cell from "./Cell";

const GridContext = createContext();

export const useGrid = () => useContext(GridContext);

function Grid() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(Array(4).fill("white"));

  const handleCount = () => setCount((prev) => prev + 1);

  const handleColorChange = (index) => {
    setColor((prevColors) =>
      prevColors.map((c, i) =>
        i === index ? (c === "white" ? "black" : "white") : c
      )
    );
  };

  return (
    <GridContext.Provider
      value={{ count, handleCount, color, handleColorChange }}
    >
      <div className="flex-container">
        <h1>Count: {count}</h1>
        <div className="grid-container">
          {color.map((_, index) => (
            <Cell key={index} index={index} />
          ))}
        </div>
      </div>
    </GridContext.Provider>
  );
}

export default Grid;
