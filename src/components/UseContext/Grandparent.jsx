import React, { createContext } from 'react'
import Parent from './Parent.jsx';
export const GrandContext = createContext();
const Grandparent = () => {
  return (
    <div style = {{border: "2px solid black", padding: "20px", margin: "20px"}}>
        <GrandContext.Provider value = {"Hello from Grandparent"}>
            <h1>Grandparent</h1>
            <Parent />  
        </GrandContext.Provider>
    </div>
  )
}

export default Grandparent