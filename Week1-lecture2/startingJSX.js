const name = "World";
const age = 26;
let demo = true;

function sum(){
    return 10+5;
}
// function App(){
//     let arr = [1,2,3,4,5,6]

//     return (
//         <>
//             {arr.map((num)=><h2>{num}</h2>)}
//         </>
//     )
// }

const App = () => {
    const cars = ["BMW", "Audi", "Ferrari", "Porsche", "Tesla"];
  
    return (
      <>
        <h1>ES6 Array Iteration Methods</h1>
        <ol>
          {cars.map((car,index) => (
            <li key={index}>{car}</li>
          ))}
        </ol>
      </>
    );
  };

const Student = () =>{
    const students = [
        {Name: "Yash", Age: "26", marks: 89 },
        {Name: "Tobi", Age: "22", marks: 78 },
        {Name: "Arthur", Age: "36", marks: 56 }
      ];

      return(
        <>
            <h1>Student Details</h1>
            <table border="1">
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                    <td>{student.Name}</td>
                    <td>{student.Age}</td>
                    <td>{student.marks}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
      )
}

const Conditional = () =>{
    const loggedIn = true;
    let name = "Alexa"
    let lastName = "Diaz"

    return(
        <>
            <h1>Hello {loggedIn?lastName||name:"User"}!</h1>
            {loggedIn && <p>Welcome to the portal!</p>}
        </>
    )
}

const header = <h2>This is JSX expression</h2>

const jsxHeading = (<><h1>Welcome to my {name}</h1>{header}<p>My age is {age}, And this is {demo.toString()}</p><h3>This is using {sum()}</h3></>)

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

// ReactDOM.createRoot(document.getElementById("root")).render(<Student/>);

ReactDOM.createRoot(document.getElementById("root")).render(<Conditional/>);