import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === "Enter") {
      onEnter();
    } else if (keyVal === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
