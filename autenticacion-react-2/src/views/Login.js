import React, { useContext } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import { HOME } from '../config-paths/Pahts';
import { GlobalContext } from '../context/GlobalContext';

export const Login = () => {

  const navigate = useNavigate();

  const { login, students, loginUser, userCheck } =
    useContext(GlobalContext);

 
   console.log({ students });
console.log("en Login", { userCheck });

function handleSubmit(event) {
  event.preventDefault();

  let InfoInput = event.target.email.value;
  let InfoInput2 = event.target.psw.value;
  let checkUserEmail = "error email";
  let checkUserPsw = "error psw";

  // checking email
  students.forEach((object) => {
    if (object.email === InfoInput) {
      //
      checkUserEmail = object;
      // console.log({ checkUserEmail });
    }
  });

  // checking Password
  students.forEach((object) => {
    if (object.password === InfoInput2) {
      //
      checkUserPsw = object;
      // console.log({ checkUserPsw });
    }
  });

  if (checkUserEmail === checkUserPsw && checkUserPsw.email !== undefined) {
    // console.log({ checkUserEmail, checkUserPsw });
    alert("Logged!");
    login();
    loginUser(checkUserPsw.id);
    navigate(`/private/${checkUserPsw.id}`);
  } else {
    alert("Sorry the password it's incorrect");
  }
};

  return (
    <>
      <h1>
       <u> 
         Login
       </u>
      </h1>
      <h2>Enter your password for login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type={"email"}
          name="email"
          autoComplete="username"
          placeholder="Enter your email"
          required
        />{" "}
        <input
          type={"password"}
          name="psw"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />{" "}
        &nbsp;
        <button className='LinkStart btn-blue' type="submit">Login</button>
      </form>
      <Link to={HOME}>Go to Register</Link>
    </>
  );
};





















