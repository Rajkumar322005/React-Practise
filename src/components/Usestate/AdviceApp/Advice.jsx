import React, { useEffect, useState } from 'react'
// import './Advices.css';
const Advice = () => {
    const [advice,setadvice] = useState("Please click Button to get Advice");
    const [count,setcount] = useState(0);

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        //console.log(res);
        const data = await res.json();
        setadvice(data.slip.advice);
        setcount((count)=>count+1);
    }
    useEffect(function(){
        getAdvice();
    },[]);
  return (
    <div>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You Have Read <b>{count}</b>pieces of Advices</p>

    </div>
  )
}

export default Advice