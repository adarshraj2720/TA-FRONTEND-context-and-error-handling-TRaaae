import React from "react";

import { useContext } from "react";
import modeContext from "./context";

export default function SwitchButton({ isDarkMode, changeMode }) {
   let mode = useContext(modeContext)
  return (
    <button
      className={`btn ${mode.mode ? "btn-dark" : "btn-light"}`}
      onClick={mode.changeMode}
    >
      {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
