import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../config-paths/Pahts';
import { GlobalContext } from '../context/GlobalContext';

export const Home = () => {

  const {  addStudent } = useContext(GlobalContext);

   const navigate = useNavigate();

   const [student, setStudent] = useState({
     name: "",
     email: "",
     password: "",
     course: "",
   });
  
   const { name, email, password, course } = student;

   const handleChange = (event) => {
     setStudent({...student, [event.target.name]: event.target.value})
   };


 const handleSubmit = (event) => {
    event.preventDefault();

if ( email.length && password.length >= 5 && course !== "") {
  alert("Validation form OK");
     addStudent(student);
     navigate(LOGIN);

} else {
  alert("Repeat the form");
}

 };


  return (
    <>
      <h1>
        <u>Register</u>
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            name="name"
            placeholder="Enter your name.."
            onChange={handleChange}
            value={name}
            required
          />{" "}
          <br />
          <br />
          <input
            type={"email"}
            name="email"
            placeholder="Enter your email.."
            autoComplete="username"
            onChange={handleChange}
            value={email}
            required
          />
          <div className="divPassword">
            * minimum 5 characters for the password *
          </div>
          <input
            type={"password"}
            name="password"
            autoComplete="current-password"
            placeholder="Create your password.."
            onChange={handleChange}
            value={password}
            required
          />{" "}
          <br />
          <br />
          <select name="course" value={course} 
          onChange={handleChange}
          required >
            <option value="">Select your course.. </option>
            <option value="Math">Math</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Art">Art</option>
          </select>
          <br />
          <button className="LinkStart btn-blue" type="submit">
            Submit
          </button>
        </form>
        <Link to={LOGIN}>Go to login</Link>
      </div>
    </>
  );
}

