import React from "react";
import Paper from "./paper";
import "./App.css";
import WindowSize from "./window";

function App() {

  const size = WindowSize();

  return (
    <div className="App">
      {size.width}px / {size.height}px
      <Paper />
    </div>
  );
}

export default App;
