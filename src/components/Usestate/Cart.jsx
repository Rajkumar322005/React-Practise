import React, { use } from 'react'
import { useState } from 'react'
const Cart = () => {
    const [count,setcount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [name,setname] = useState('');
    const counter = ()=>setcount(count+1);

  return (
    <>

        <h1>Counter APP</h1>
        <h2>{count}</h2>
        <button onClick={counter}>Increment</button>
        <br/>
        <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This text is visible.</p>}

      
        
    </>
  )
}

export default Cart