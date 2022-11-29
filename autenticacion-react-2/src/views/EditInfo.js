import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';


export const EditInfo = () => {

  const { userCheck, student, setStudent, loadStudents, updateStudent } = useContext(GlobalContext);

  const { name, email, password, course} = student;

  useEffect(() => {
    loadStudents(userCheck);

  }, []);

  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

const handleSubmit = (event) => {
      event.preventDefault();

 updateStudent(userCheck, student);
 alert("Modified")
};
  

  return (
    <div className="divGridEditInfo">
      <div className="editDiv1">
        <h2>
          <u>Edit my info</u>
        </h2>
        <h2>Inside my private route</h2>
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
      </div>
      <div className="editDiv2">
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            name="name"
            placeholder="Enter your name.."
            onChange={handleChange}
            value={name || ""}
            required
          />{" "}
          <br />
          <input
            type={"email"}
            name="email"
            placeholder="Enter your email.."
            autoComplete="username"
            onChange={handleChange}
            value={email || ""}
            required
          />
          <br />
          <input
            type={"password"}
            name="password"
            autoComplete="current-password"
            placeholder="Create your password.."
            onChange={handleChange}
            value={password || ""}
            required
          />{" "}
          <br />
          <select name="course" value={course} 
          onChange={handleChange} 
          required >
            <option value="">Select your course.. </option>
            <option value="Math">Math</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Philosophy">Philosophy</option>{" "}
            <option value="Art">Art</option>
          </select>
          <br />
          <button className="LinkStart btn-blue" type="submit">
            Change personal Info
          </button>
        </form>
      </div>
    </div>
  );
};



