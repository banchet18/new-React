import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement  =>  Object  =>  HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "helllo channel");

// JSX React
const jsxHeading = <h1>Namaste react</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
