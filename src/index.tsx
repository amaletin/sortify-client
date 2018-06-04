import * as React from "react";
import * as ReactDOM from "react-dom";

import * as Albums from "../mocks/albums/post.json";

const Index = () => {
  return <div>Hello Webpack & React!</div>;
};

const container: Element = document.getElementById("index")

ReactDOM.render(<Index />, container);
