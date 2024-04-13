import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const LoginPage = lazy(() => import("../../pages/Login/Login"));
const RegisterPage = lazy(() => import("../../pages/Register/Register"));
const ContactsPage = lazy(() => import("../../pages/Contact/Contacts"));

import { refreshUser } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <p>Refreshing...</p>
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/registration"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}
