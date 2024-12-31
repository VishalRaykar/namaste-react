import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

//transpiled by parcel's babel bundler before it reaches browser/js engine
const jsxheading = (<h1 id = "heading" className="head">
    Namaste react heading using jsx
    </h1>);
console.log(jsxheading);
//JSX => React.createElement => Js Object => HTMLElement(render)
const root = createRoot(document.getElementById("root"));
root.render(jsxheading);
