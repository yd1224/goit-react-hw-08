import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const IsError = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    IsError,
  };
};
