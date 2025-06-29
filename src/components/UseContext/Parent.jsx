import React from 'react'
import Child from './child';
const Parent = () => {
  return (
    <div style = {{border: "2px solid black", padding: "20px", margin: "20px"}}>
        <h1>Parent</h1>
        <Child/>
    </div>
  )
}

export default Parent