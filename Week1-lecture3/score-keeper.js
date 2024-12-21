let score = 50;
let wicket = 0;
let ballWiseResult = [];
let hit = 0;
let comment = React.createRef();

function AddRuns(num){
    hit = num;
    rootElement.render(<App/>);
}


function AddWicket(){
    hit = "W";
    rootElement.render(<App/>);
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

function handleSubmit(event){
        event.preventDefault()
        if(hit == "W"){
            wicket+=1;
        }else{
            score+=hit;
        }
        ballWiseResult.unshift(
            <span>{`${hit}, ${comment.current.value}`}</span>
        )
        hit = 0;
        comment.current.value="";
        rootElement.render(<App/>)
}

const Form = () =>{
    return(
        <form onSubmit={handleSubmit}>
            <input value={hit}/>
            <input ref={comment} placeholder="Add a comment"/>
            <button>Submit</button>
        </form>
    )
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
        {/* <Result/> */}
        <br/>
        {<Form/>}
        <hr/>
        {ballWiseResult.map((res,index)=>(
            <p key={index}>{res}</p>
        ))}
      </>
    );
  };
  

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);