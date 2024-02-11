// const heading=React.createElement("h1",{id:"heading"},"hello world")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


const parent=React.createElement("div",{id:"parent"},
 React.createElement("div",{id:"child"},
 [React.createElement("h1",{id:"element"},"h1 tag"),React.createElement("h2",{id:"element"},"h2 tag")]
)
)
const root=ReactDOM.createRoot(document.getElementById("root"))
// console.log(parent)
root.render(parent);