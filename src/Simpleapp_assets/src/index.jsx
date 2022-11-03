import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import App2 from "./components/App2";

const init = async () => {
  ReactDOM.render(<App />, document.getElementById("root"));
}

init();

