import React, { useContext } from 'react'
import { GrandContext } from './Grandparent.jsx'; // Importing the context from Grandparent

const Child = () => {
    const value = useContext(GrandContext);
    // The GrandContext is imported from the Grandparent component without passing it down through props by parents.
    // This allows the child component to access the context value directly.
  return (
    <div style = {{border: "2px solid black", padding: "20px", margin: "20px"}} >
        <h1>Child</h1>
        <h2>{value}</h2>
        {/* Displaying the context value */}
        
        {/* The child component can access the context value provided by the Grandparent component */}

        {/* <p>This is the child component.</p>
        <p>It can access the context provided by the Grandparent.</p>       
        <p>Child components can use the context to get data or functions.</p>
        <p>Context helps in avoiding prop drilling.</p>
        <p>Child components can also provide their own context if needed.</p> =
        <p>Context is useful for global state management.</p>
        <p>Child components can consume context using useContext hook.</p>  
        <p>Child components can also update the context if needed.</p>
        <p>Context can be used for themes, user authentication, etc.</p>
        <p>Child components can be nested within each other.</p> */}
        
    </div>
  )
}

export default Child;