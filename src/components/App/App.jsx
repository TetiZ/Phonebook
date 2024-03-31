import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/Home"));
const LoginPage = lazy(() => import("../../pages/Login"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const PhonebookPage = lazy(() => import("../../pages/Phonebook"));

import { refreshUser } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegisterPage />} />
            <Route path="/phonebook" element={<PhonebookPage />} />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}
