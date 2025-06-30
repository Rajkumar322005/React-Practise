// useEffect(() => {
//   // Your side effect code here

//   return () => {
//     // Optional: Cleanup code
//   };
// }, [dependencies]);

import React, { useEffect,useState } from 'react'

const Temp = () => {
  const [count, setcount] = useState(0);

  // useEffect(()=>{
  //   console.log("useEffect called");
  // },[]);only once when component mounts

  useEffect(() => {
    console.log("useEffect called");
    return () => {
      console.log("cleanup function called"); 
      // This function runs when the component unmounts or before the next effect runs
    };
  }, [count]);

  
  return (
    <>
    <h2>{count}</h2>
      <button onClick = {()=>setcount((count)=>count+1)}>+</button>
      <button onClick={() => setcount((count) => count - 1)}>-</button>
    </>
  )
}

export default Temp;