import Counter from './counter'
import StateWork from './StateWork'
import './App.css'
import Users from '../user'
import { Suspense } from 'react'
import Friends from './friends'
import Post from './post'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())

// const fetchFriends =async () =>{
// const  res = await fetch ('https://jsonplaceholder.typicode.com/users');
// return res.json();

// }

const fetchPost =async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

const postPromise = fetchPost();




  // const friendsPromise =fetchFriends();
 

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


<Suspense fallback={<h4>Data is feteching from api</h4>}>
<Post postPromise ={postPromise}></Post>
</Suspense>


    {/* <Suspense fallback={<h3>Data Fetching wait for moment</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
    </Suspense>
    <Suspense fallback={<h3>Friends will come to wish you </h3>}>
    <Friends friendsPromise= {friendsPromise}></Friends>
    </Suspense> */}

      
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
