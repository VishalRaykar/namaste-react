import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
const parent = React.createElement(
    "div",
    {id:"parent", xyz:"abc"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{id:"h1tag"},"I am an H1 tag !"),React.createElement("h2",{id:"h2tag"},"I am an H2 tag React !")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{id:"h1tag"},"I am an H1 tag !"),React.createElement("h2",{id:"h2tag"},"I am an H2 tag React !")]
    )]
);

const root = createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);