import { Layout }  from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import Homepage from "pages/Homepage/Homepage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from "pages/LoginPage/LoginPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import { RestrictedRoute } from "../Routes/RestrictedRoute";
import { PrivateRoute } from "../Routes/PrivateRoute";

// const Homepage = lazy(() => import('../../pages/Homepage/Homepage'));
// const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
// const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          } />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          } />
          <Route path="/contacts" element={
            <PrivateRoute redirectTo="/" component={<ContactsPage />} />
          } />
        </Route>
      </Routes>
     </div>     
   )
  }