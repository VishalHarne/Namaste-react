// const heading = React.createElement("h1", {id:"heading"}, "hello World from react");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

import React from "react";
import ReactDOM from  "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
    [
    React.createElement("div", {id:"child1", key: "child1"},
        
        React.createElement("h1",{id:"c1"},"I am a H1 Tag ")
       
        
    ),
     React.createElement("div", {id:"child2", key: "child2"},
             
        React.createElement("h1",{id:"c2"},"I am second H2 Tag")
             
            ),
]);


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
