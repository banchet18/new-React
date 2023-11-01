const heading = React.createElement("h1", { id: "abc" }, "hello react World!");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
