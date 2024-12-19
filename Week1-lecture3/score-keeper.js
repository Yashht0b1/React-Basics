let score = 50;
let wicket = 0;
let ballWiseResult = []

function AddRuns(num){
    if (wicket<10){
        ballWiseResult.push(num);
        score+=num;
        rootElement.render(<App/>);}
        console.log(ballWiseResult);
}


function AddWicket(){
    if (wicket<10){
        ballWiseResult.push("W");
        wicket+=1;
        rootElement.render(<App/>);
        console.log(ballWiseResult)
    }
}

const ScoreButtons = () =>{
    return(
    <div>
    <button onClick={()=>AddRuns(0)}>0</button>
    <button onClick={()=>AddRuns(1)}>1</button>
    <button onClick={()=>AddRuns(2)}>2</button>
    <button onClick={()=>AddRuns(3)}>3</button>
    <button onClick={()=>AddRuns(4)}>4</button>
    <button onClick={()=>AddRuns(5)}>5</button>
    <button onClick={()=>AddRuns(6)}>6</button>
    <button onClick={AddWicket}>Wicket</button>
    </div>)
}

const Result = () =>{
    return(
        <div>
            {ballWiseResult.map((res,index)=>(
                <>
                {index%6===0?<br/>:null}
                <span key={index}>{res===0?<strong>.</strong>:res}&nbsp;&nbsp;&nbsp;</span>
                </>))}
        </div>
    )
}

const App = () => {
    // Initialize score and wicket values
    return (
      <>
        <h1>Score-Keeper</h1>
        <h2>Score: {score}/{wicket}</h2>
        <ScoreButtons/>
        <Result/>
      </>
    );
  };
  

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);