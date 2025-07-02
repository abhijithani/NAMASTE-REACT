/*const heading = React.createElement
("h1", {id:"heading" }, "hello world from react");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading);*/


const Parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" },
        React.createElement("div", { id: "parent" }, [
            React.createElement("h1", {}, "i am h1 heading"),
            React.createElement("h2", {}, "i am h2 heading")]

        )),
    React.createElement("div", { id: "child" },
        React.createElement("div", { id: "parent" }, [
            React.createElement("h1", {}, "i am h1 heading"),
            React.createElement("h2", {}, "i am h2 heading")]

        ))]
);
console.log(Parent)

 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);