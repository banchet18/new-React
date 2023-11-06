import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement  =>  Object  =>  HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "helllo channel");
console.log(heading);
// JSX and react both are different
// JSX is syntax
// JSX - is not HTML in JS or HTML - like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) -> PARCEL - Babel
const jsxHeading = <h1 id="heading">Namaste react</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
