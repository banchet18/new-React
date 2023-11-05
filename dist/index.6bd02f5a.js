const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "h1"),
        React.createElement("h2", {}, "h2")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "h1"),
        React.createElement("h2", {}, "h2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
