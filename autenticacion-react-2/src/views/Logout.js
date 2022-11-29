import  { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

export const Logout = () => {
 
 const navigate = useNavigate();
  
  const { logout, logoutUser } = useContext(GlobalContext);

  useEffect(() => {
    logout();
    logoutUser();
    navigate("/")
  }, []);

  return (
    <>
      <h1>Bye bye</h1>
      <Link to="/">Go to Home</Link>
    </>
  );
}

