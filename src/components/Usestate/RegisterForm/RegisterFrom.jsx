import React, { useState } from 'react'
import '../RegisterForm/Form.css';
const RegisterFrom = () => {
    const [User,setUser] = useState({
        name: "Rajesh Kumar",
        age : 25,
        gender: 'Male',
        isMarried: true,
    });
  return (
    <>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{User.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{User.age}</td>
                </tr>

                <tr>
                    <td>gender</td>
                    <td>{User.gender}</td>
                </tr>
                <tr>
                    <td>isMarried</td>
                    <td>{User.isMarried?"Married":"Not Married"}</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default RegisterFrom