// React with js
// const react_heading = React.createElement("h1", { className: "head" }, "Hello to React.");

// React with jsx

const jsxHeading = (<h1>Hello JSX</h1>);
const jsxPara = (<p>This is created using JSX</p>);

const jsxReactList = <>
    <h1>React Basics</h1>
    <p>React is open source, platform-independent.</p>
    <ol>
        <li>Declarative</li>
        <li>Uses VDOM</li>
        <li>Create SPAs efficiently</li>
    </ol>
</>

// ReactDOM.createRoot(document.getElementById("root")).render(react_heading);
// ReactDOM.createRoot(document.getElementById("root")).render(<>
    // {jsxHeading}
    // {jsxPara}
// </>);

// ReactDOM.createRoot(document.getElementById("root")).render(jsxReactList);

// Component in React ->Always name your react component with capital letter

const Name = ()=>
    <>
    <h3>This is an arrow Function</h3>
    </>

function App(){
    return (
        <>
        <h3>This is a react Function</h3>
        <p>This para is being printed using react function</p>
        </>
    )
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

// ReactDOM.createRoot(document.getElementById("root")).render(<>
//     {<App/>}
//     {Name()}
// </>);

ReactDOM.createRoot(document.getElementById("root")).render(<><App/><Name/></>);