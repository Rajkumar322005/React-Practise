import React, { useState } from "react";
import "../RegisterForm/Form.css";

const RegisterForm = () => {
  const [User, setUser] = useState({
    name: "Rajesh Kumar",
    age: 25,
    gender: "Male",
    isMarried: true,
    country: "India",
    bio: "",
  });

  function changeHandler(e) {
    const { name, type, value, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

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
            <td>Gender</td>
            <td>{User.gender}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{User.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{User.country}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{User.bio}</td>
          </tr>
        </tbody>
      </table>

      <form>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={User.name}
          onChange={changeHandler}
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          value={User.age}
          onChange={changeHandler}
        />

        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={changeHandler}
              checked={User.gender === "Male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={changeHandler}
              checked={User.gender === "Female"}
            />
            Female
          </label>
        </div>

        <label>
          <input
            type="checkbox"
            name="isMarried"
            checked={User.isMarried}
            onChange={changeHandler}
          />
          isMarried
        </label>

        <div>
          <label htmlFor="country">Select Country: </label>
          <select
            name="country"
            id="country"
            value={User.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <textarea
          name="bio"
          value={User.bio}
          placeholder="Write"
          onChange={changeHandler}
        />
      </form>
    </>
  );
};

export default RegisterForm;
