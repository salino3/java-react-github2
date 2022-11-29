import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const AllStudents = () => {

      const {  students } =
        useContext(GlobalContext);

  return (
    <>
      <h1>
        <u>All Students</u>
      </h1>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>{" "}
        </thead>

        <tbody>
          {students.map((item) => (
            <tr key={item.id} className="gridTr">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

