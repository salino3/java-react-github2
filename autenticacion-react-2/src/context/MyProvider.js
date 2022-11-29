import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { GlobalContext } from './GlobalContext';
import axios from 'axios';


const MyProvider = ({children}) => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});

  let userID = "USERID";

  const [userCheck, setUserCheck] = useState(
    window.localStorage.getItem(userID)
  );

  const loginUser = useCallback(function (info) {
    window.localStorage.setItem(userID, JSON.stringify(info));
    setUserCheck(info);
  }, []);

  const logoutUser = useCallback(function () {
    window.localStorage.removeItem(userID, JSON.stringify(""));
    setUserCheck("");
  }, []);

  
  //* API call
  const myapi = "http://localhost:8080/students";

  const fetchApi = async () => {
    const response = await fetch(myapi);

    const JsonResponse = await response.json();
    setStudents(JsonResponse);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  //* Add a student
  const addStudent = async (studentsData) => {
    try {
         await axios.post("http://localhost:8080/students", studentsData);
         fetchApi();
    } catch (error) {
     console.log(error);
    alert("There has been an error!");
 

    }
 
  };

  //* View student info
  const loadStudents = async (id) => {
    try {
      //
      const result = await axios.get(`http://localhost:8080/students/${id}`);
      console.log(result);
      setStudent(result.data);
      console.log({ isAuthenticated });
      console.log("usando loadStudents(ID)");
    } catch (error) {
      console.log(error);
      alert("Student with this code is not in the database");
    }
  };

  //* Modify data student
  const updateStudent = async (id, student) => {
    try {
      await axios.put(`http://localhost:8080/students/${id}`, student);
      fetchApi();
    } catch (error) {
      alert("There has been an error!");
      console.log(error);
    }
  };

  //* Delete a student
  const deleteStudent = async (id) => {
    try {
          await axios.delete(`http://localhost:8080/students/${id}`);
     logout();
     logoutUser();
    fetchApi();
    } catch (error) {
        alert("There has been an error!");
        console.log(error);
    }

  };

  //
  let user = "USER";

  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(user) ?? false
  );

  const login = useCallback(function () {
    window.localStorage.setItem(user, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(user, false);
    setIsAuthenticated(false);
  }, []);


  return (
    <>
      <GlobalContext.Provider
        value={{
          login,
          logout,
          isAuthenticated,
          students,
          //
          fetchApi,
          setStudent,
          student,
          loadStudents,
          addStudent,
          //
          loginUser,
          logoutUser,
          userCheck,
          updateStudent,
          deleteStudent,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default MyProvider


