import{useState} from "react"

export default function Counter (){
const [count ,setCount] = useState(0);
const handleAdd = () =>{
   const newCount = count+1;
   setCount(newCount);
}


const counterStyle = {
    border:"4px solid blue"
}


    return (
        

        <div style={counterStyle}>
            <h3> Count:{count} </h3>
            <button onClick={handleAdd}>ONCLIKCK </button>
        </div>
    )
}