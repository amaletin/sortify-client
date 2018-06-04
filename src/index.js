// @flow

import * as React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello Webpack & React!</div>;
};

const container: ?HTMLElement = document.getElementById("index")

if (container == null) {
  throw new Error('no container');
}

ReactDOM.render(<Index />, container);
