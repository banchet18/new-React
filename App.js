import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement  =>  ReactElememt-JS Object  =>  HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "helllo channel"); we wontbe using now onWords
// console.log(heading);
// JSX and react both are different
// JSX is syntax
// JSX - is not HTML in JS or HTML - like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) -> PARCEL - Babel
// JSX => Babel transpiled it to React.createElement => React.Element - JS Object => HTMLElement(render)

// React Element
const Title = () => (
  <h1 id="heading" className="head">
    Namaste reactt
  </h1>
);

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2>{100 + 200}</h2>
    <h1 className="heading ">Namaste React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
