import React from "react";
import "./Cell.css";
import { useGrid } from "./Grid";

function Cell({ index }) {
  const { color, handleCount, handleColorChange } = useGrid();

  return (
    <div
      className="grid-item"
      onClick={() => {
        handleCount();
        handleColorChange(index);
      }}
      style={{ backgroundColor: color[index] }}
    ></div>
  );
}

export default Cell;
