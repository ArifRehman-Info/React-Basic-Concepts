import Counter from './counter'
import StateWork from './StateWork'
import './App.css'

function App() {
 

  function handleBite (){
    alert('I am clicked.')
  }
  const handleBite2 = () =>{
    alert('Clicking button no -03')
  }

const buttonAdd = (num) =>{
const newValue = num + 100 

alert(newValue)

}

  return (
    <>
     
      <h2>Vite + React</h2>
      <StateWork></StateWork>
      <Counter></Counter>
     <button onClick={handleBite}>Bite Me</button>
     <button onClick={function handCLick() {alert('I am clicking')}}>Click Me</button>
      <button onClick={handleBite2}>Mad CLick</button>
      <button onClick={() => alert('ClickMe more')}>Hello Humans</button>

   <button onClick={()=> buttonAdd(10)}>NewNumber</button>
   
    </>
  )
}

export default App
