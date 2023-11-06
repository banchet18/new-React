import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement  =>  Object  =>  HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "helllo channel");
// JSX and react both are different
// JSX is syntax
// JSX - is not HTML in JS or HTML - like or XML-like syntax
const jsxHeading = <h1 id="heading">Namaste react</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
