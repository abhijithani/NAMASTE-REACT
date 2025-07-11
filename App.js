
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React from jsx
  </h1>
);


//component composition
const HeadingComponent = () => (
  <div id="Container">
    {Title()}
    <Title></Title>
    <Title />
    <h1> Namaste React from functional component
    </h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
