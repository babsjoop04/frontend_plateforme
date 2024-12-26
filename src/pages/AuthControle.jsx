import { useAuthProvider } from "../utils/AuthContext";
import LoginPage from "./LoginPage";

const AuthControle = ({ children }) => {
  const { currentUser, changeCurrentUser } = useAuthProvider();
  

  return currentUser.token !== null ? children : <LoginPage />;
};

export default AuthControle;
