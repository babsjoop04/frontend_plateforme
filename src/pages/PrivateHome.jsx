import { useAuthProvider } from "../utils/AuthContext";
import Dashboard from "./Dashboard";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";

const PrivateHome = () => {
  // const bool = false

  // const token = useSelector(state => state.user.token)
  const { currentUser, changeCurrentUser } = useAuthProvider();

  

  if (currentUser.token !== null && currentUser.role_utilisateur === "administrateur") {
    return <Dashboard />;
  }

  if (currentUser.token !== null) {
    return <Home />
    ;
  }


  return <LandingPage /> ;

  // return currentUser.token === null ? <LandingPage /> : <Dashboard />;
};

export default PrivateHome;
