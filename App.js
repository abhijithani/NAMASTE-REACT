
import React from "react";
import ReactDOM from "react-dom/client";
 
const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "child-1" },
    React.createElement(
      "div",
      { id: "parent" },
      [
        React.createElement("h1", { key: "h1-1" }, "i am h1 heading"),
        React.createElement("h2", { key: "h2-1" }, "i am h2 heading"),
      ]
    )
  ),
  React.createElement(
    "div",
    { id: "child", key: "child-2" },
    React.createElement(
      "div",
      { id: "parent" },
      [
        React.createElement("h1", { key: "h1-2" }, "i am h1 heading"),
        React.createElement("h2", { key: "h2-2" }, "i am h2 heading"),
      ]
    )
  )
]);
console.log(Parent)

 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);