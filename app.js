import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

//transpiled by parcel's babel bundler before it reaches browser/js engine

// React component
const jsxheading = (<h1 id = "heading" className="head" tabIndex="5">
    Namaste react heading using jsx
    </h1>);

// Class based components - Old

// Functional Components - New - Function that returns a react element 

const elem = <span>Sample react element</span>;



const titleElement = (<h1 className="head">
    Namaste react title element !
</h1>);

// Component Composition
const HeadingComponent2 =  () => (    
    <div id = "heading">
     {titleElement}
     <h1>Namaste react functional component</h1>
    </div>
);

const TitleComponent = () =>(
    <h1 className="head">
        {elem}
        {HeadingComponent2()}
        <HeadingComponent2/>
        <HeadingComponent2>Helllowww</HeadingComponent2>
        Namaste react title component !
    </h1>
);

console.log(jsxheading);
//JSX => React.createElement => Js Object => HTMLElement(render)
const root = createRoot(document.getElementById("root"));
root.render(<TitleComponent/>);
