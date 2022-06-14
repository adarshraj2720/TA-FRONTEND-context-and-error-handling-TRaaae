import { useContext } from "react";
import modeContext from "./context";


function Header({ isDarkMode }) {
  let mode = useContext(modeContext)
  return (
    <h1 className={`heading ${mode.mode ? "heading-dark" : "heading-light"}`}>
      {mode.mode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
