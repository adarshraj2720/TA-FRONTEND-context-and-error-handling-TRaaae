import React from "react";

// import { useContext } from "react";
import modeContext from "./context";

class Banner extends React.Component {
      static contextType = modeContext;
  render() {
    // let mode = useContext(modeContext)
    let { isDarkMode } = this.context.mode;


    return (
      <div
        className={
          isDarkMode
            ? "message-dark message--banner message--success"
            : "message message--banner message--success"
        }
      >
        <h3 className="message-heading">This is a success banner!</h3>
        <p>It celebrates that you have successfully completed a major task.</p>
      </div>
    );
  }
}

export default Banner;
