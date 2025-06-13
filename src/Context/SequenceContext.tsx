import React, { createContext, Dispatch, useState } from "react";

interface inputContextTypes {
  frstInput: string;
  setFrstInput: Dispatch<React.SetStateAction<string>>;
  secondInput: string;
  setSecondInput: Dispatch<React.SetStateAction<string>>;
  values: string[];
  setValues: Dispatch<React.SetStateAction<string[]>>;
}

export let inputContext = createContext<inputContextTypes>({
  frstInput: "",
  setFrstInput: () => {},
  secondInput: "",
  setSecondInput: () => {},
  values: [],
  setValues: () => {},
});

export const SequenceContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let [frstInput, setFrstInput] = useState<string>("");
  let [secondInput, setSecondInput] = useState<string>("");
  let [values, setValues] = useState<string[]>([]);
  const value: inputContextTypes | null = {
    frstInput: frstInput,
    setFrstInput: setFrstInput,
    secondInput: secondInput,
    setSecondInput: setSecondInput,
    values: values,
    setValues: setValues,
  };
  return (
    <inputContext.Provider value={value}>{children}</inputContext.Provider>
  );
};
