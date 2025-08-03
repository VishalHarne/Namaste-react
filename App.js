// const heading = React.createElement("h1", {id:"heading"}, "hello World from react");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

const parent = React.createElement("div",{id:"parent"},
    [
    React.createElement("div", {id:"child"},
        [
        React.createElement("h1",{},"I am a H1 Tag"),
        React.createElement("h2",{},"I am a h2 Tag")
        ]
    ),
     React.createElement("div", {id:"child"},
             [
        React.createElement("h1",{},"I am a H1 Tag"),
        React.createElement("h2",{},"I am a h2 Tag")
             ]
            ),
]);


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
