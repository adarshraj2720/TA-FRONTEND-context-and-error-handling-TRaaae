import { useContext } from "react";
import modeContext from "./context";

function Title({ text, isDarkMode }) {
  let mode = useContext(modeContext)
  return (
    <h2
      className={`heading ${
        mode.mode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
