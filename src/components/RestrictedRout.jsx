import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();
  console.log(redirectTo);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
