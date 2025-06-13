import React from "react";
import "./App.css";
import { SequenceContext } from "./Context/SequenceContext";
import { Inputs } from "./Inputs/Inputs";
import { Letters } from "./Sequence_output/Letters";

function App() {
  return (
    <div className="App">
      <SequenceContext>
        <Inputs />
        <Letters />
      </SequenceContext>
    </div>
  );
}

export default App;
