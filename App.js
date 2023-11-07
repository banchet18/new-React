import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement  =>  ReactElememt-JS Object  =>  HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "helllo channel"); we wontbe using now onWords
console.log(heading);
// JSX and react both are different
// JSX is syntax
// JSX - is not HTML in JS or HTML - like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) -> PARCEL - Babel
// JSX => Babel transpiled it to React.createElement => React.Element - JS Object => HTMLElement(render)

// React Element
const heading = (
  <h1 id="heading" className="head">
    Namaste react
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
