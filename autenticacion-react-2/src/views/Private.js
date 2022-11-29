import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Private = () => {


   const {
     loadStudents,
     student,
     userCheck,
   } = useContext(GlobalContext);

   let { name, email, course } = student;


   useEffect(() => {

     loadStudents(userCheck);
      //  console.log({ student });
      
   }, []);


  return (
    <>
      {" "}
      <h2>
        <u>Inside my private route</u>
      </h2>
      <p>
        <b>Student code:</b> {userCheck}
      </p>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Course:</b> {course}
      </p>
      ~ ~ º ~ ~ º ~ ~ º ~ ~
    </>
  );
}

