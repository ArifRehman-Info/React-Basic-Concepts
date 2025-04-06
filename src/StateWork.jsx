import { useState } from "react";

export default function StateWork (){
    const [runs , setRuns] = useState(0);

    const [single, setSingle]= useState(0);
    const [four, setFour]= useState(0);
    const [six ,setSix] = useState(0);


   const runSingle = () =>{
    const updateRuns = runs + 1;

     const updateSingle = single +1;
     setSingle(updateSingle);

    setRuns(updateRuns);
   }

   const runFour = () =>{
    const updateRuns = runs+4;


    const updateFour = four +1;
    setFour(updateFour);

    setRuns(updateRuns);
   }
   const runSix = () => {
    const updateRuns = runs +6;

    const updateSix = six + 1;
    setSix(updateSix);

    setRuns (updateRuns);
   }

    return(
        <div>
        
        <h3>Player:Bangladeshi BatsMan </h3>
        {runs> 100 && <p>Congratulation Your score reach Centuri. <br /> You have score total {six} six and {four} four and {single} runs.</p> }
        <h1>Score :{runs}</h1>

        <button onClick={runSingle}>Single</button>
        <button onClick={runFour}>Four</button>
        <button onClick={runSix}>Six</button>
        </div>
    );
    
}