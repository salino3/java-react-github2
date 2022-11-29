import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { LOGIN, PRIVATE, ALL, PRIVATE_ALL } from "../config-paths/Pahts";
import { GlobalContext } from '../context/GlobalContext';

const Navbar = () => {

  const { logout, logoutUser, userCheck, isAuthenticated } = useContext(GlobalContext);

 const handleClick = () => {
  logout();
  logoutUser();
 }

  return (
    <>
      <nav className="Nav">
        <div>
          <div>
            {userCheck ? (
              <h2>You are logged!</h2>
            ) : (
              <Link to="/">
                <button className="LinkStart"> Start </button>
              </Link>
            )}
          </div>
          <div>
            {isAuthenticated ? (
              <Link onClick={() => handleClick()} to="/">
                <button className="LinkLogout"> Logout </button>{" "}
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <ul className="ulGrid">
            <Link to={`${PRIVATE}/${userCheck}`}>My info</Link>
            <Link to={`/private/editinfo/${userCheck}`}>Edit my info</Link>
            {userCheck ? (
              <Link to={`${PRIVATE_ALL}/${userCheck}`}>All Students</Link>
            ) : (
              <Link to={ALL}>All Students</Link>
            )}
            {userCheck ? (
              <Link to={`/private/delete/${userCheck}`}>
                Delete your account
              </Link>
            ) : (
              <Link to={LOGIN}>Login</Link>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar