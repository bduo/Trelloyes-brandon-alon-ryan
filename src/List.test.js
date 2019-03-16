import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import STORE from "./STORE";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<List props={STORE.lists} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
