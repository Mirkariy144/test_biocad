import React, { useContext } from "react";
import { Button } from "@mui/material";
import { inputContext } from "../Context/SequenceContext";

export const SubmitButton = ({ title }: { title: string }) => {
  const context = useContext(inputContext);

  console.log(context);

  let frstValue = context.frstInput;
  let secondValue = context.secondInput;
  const submit = (frstValue: string, secondValue: string) => {
    console.log(frstValue, secondValue);
    context.setValues([frstValue, secondValue]);
  };
  let disableStatus = frstValue.length !== secondValue.length ? true : false;
  return (
    <span>
      <Button
        variant="outlined"
        onClick={() => submit(frstValue, secondValue)}
        disabled={disableStatus}
      >
        {title}
      </Button>
    </span>
  );
};
