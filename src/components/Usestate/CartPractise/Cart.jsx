
import { useState } from 'react'
const Cart = () => {
    const [count,setcount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [name,setname] = useState('');
    const [Array,setArray] = useState([]);
    const [text,settext] = useState('');


    const AddTodo = () => {
      setArray([...Array, text]);
      settext("");
    };

  return (
    <>
        {/* Counter App */}
        <h1>Counter APP</h1>
        <h2>{count}</h2>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        
        {/* {Toggler} */}
        <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && <p>This text is visible.</p>}

      {/* {Text Area} */}
      <input 
        type="text"
        placeholder='Type Here'
        value={name}
        onChange={(e)=>setname(e.target.value)}
      />
      <p>Your Name is : {name}</p>

      
      <input 
        type="text"
        placeholder='Add Your Work here'
        value = {text}
        onChange = {(e)=> settext(e.target.value)}
       />
       <button onClick={AddTodo}>Add</button>
       <ul>
          {
            Array.map((val)=>(
              <li>{val}</li>
            ))
          }
          </ul>
    </>
  )
}

export default Cart