let score = 50;
let wicket = 3;

function AddOne(){
    score+=1;
    rootElement.render(<App/>);
}

function AddTwo(){
    score+=2;
    rootElement.render(<App/>);

}

function AddThree(){
    score+=3;
    rootElement.render(<App/>);
}

function AddFour(){
    score+=4;
    rootElement.render(<App/>);
}

function AddFive(){
    score+=5;
    rootElement.render(<App/>);
}

function AddSix(){
    score+=6;
    rootElement.render(<App/>);
}

function AddWicket(){
    wicket+=1;
    rootElement.render(<App/>);
}

const App = () => {
    // Initialize score and wicket values
    return (
      <>
        <h1>Score-Keeper</h1>
        <h2>Score: {score}/{wicket}</h2>
        <button onClick={AddOne}>1</button>
        <button onClick={AddTwo}>2</button>
        <button onClick={AddThree}>3</button>
        <button onClick={AddFour}>4</button>
        <button onClick={AddFive}>5</button>
        <button onClick={AddSix}>6</button>
        <button onClick={AddWicket}>Wicket</button>
      </>
    );
  };
  

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);