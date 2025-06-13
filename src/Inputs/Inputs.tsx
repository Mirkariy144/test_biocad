import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { SubmitButton } from "./../Button/SubmitButton";
import { inputContext } from "../Context/SequenceContext";

export const Inputs = () => {
  let context = useContext(inputContext);
  let frstInput = context?.frstInput;
  let secondInput = context?.secondInput;
  let aprCharts = [
    "A",
    "R",
    "N",
    "D",
    "C",
    "E",
    "Q",
    "G",
    "H",
    "I",
    "L",
    "K",
    "M",
    "F",
    "P",
    "S",
    "T",
    "W",
    "Y",
    "V",
    "-",
  ];
  function setFrstValue(value: string) {
    let cheker = aprCharts.find((item) =>
      item.includes(value[value.length - 1])
    );
    if (cheker) {
      context?.setFrstInput(value);
    }
  }
  function setSecondValue(value: string) {
    console.log(value);
    let cheker = aprCharts.find((item) =>
      item.includes(value[value.length - 1])
    );
    if (cheker) {
      context?.setSecondInput(value);
    }
  }
  return (
    <div
      className="inputs"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span style={{ marginBottom: "10px", marginRight: "20px" }}>
        <TextField
          id="frst-sequence"
          label="Первая поледовательность"
          variant="outlined"
          value={frstInput}
          onChange={(e) => setFrstValue(e.target.value.toUpperCase())}
        />
      </span>
      <span style={{ marginRight: "20px", marginBottom: "10px" }}>
        <TextField
          id="second-sequence"
          label="Вторая поледовательность"
          variant="outlined"
          value={secondInput}
          onChange={(e) => setSecondValue(e.target.value.toUpperCase())}
        />
      </span>
      <span style={{ marginRight: "20px", marginBottom: "10px" }}>
        <SubmitButton title="Выровнять" />
      </span>
    </div>
  );
};
