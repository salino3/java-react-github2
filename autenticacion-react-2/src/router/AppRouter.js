import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { HOME, LOGIN, PRIVATE, LOGOUT, EDIT, DELETE, ALL, PRIVATE_ALL } from "../config-paths/Pahts";
import PrivateRoute from "./paths-router/PrivateRoute";
import PublicRoute from "./paths-router/PublicRoute";
import {Home, Login, Logout, Private } from "../views";
import { EditInfo } from '../views/EditInfo';
import { DeleteAccount } from '../views/DeleteAccount';
import { AllStudents } from '../views/AllStudents';
import { PageNotFound } from '../components/PageNotFound';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={ALL} element={<AllStudents />} />
          <Route path={"/*"} element={<PageNotFound />} />
        </Route>
        {/*  */}
        <Route path={PRIVATE} element={<PrivateRoute />}>
          <Route path={`${PRIVATE}/:id`} element={<Private />} />
          <Route path={`${PRIVATE_ALL}/:id`} element={<AllStudents />} />
          <Route path={LOGOUT} element={<Logout />} />
          <Route path={`${EDIT}/:id`} element={<EditInfo />} />
          <Route path={`${DELETE}/:id`} element={<DeleteAccount />} />
          <Route path={"/private/*"} element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter













