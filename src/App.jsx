import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { ColorRing } from "react-loader-spinner";
import { RefreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./components/RestrictedRout";
import { PrivateRoute } from "./components/PrivateRout";

const HomePage = lazy(() => import("./page/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./page/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("./page/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./page/LoginPage/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const { IsRefreshing } = useAuth();
  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);
  return IsRefreshing ? (
    <div className="colorRingWrapperBox">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#de0c1c", "#fe2d2d", "#fb7830", "	#fecf02", "#ffdd47"]}
      />
    </div>
  ) : (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
