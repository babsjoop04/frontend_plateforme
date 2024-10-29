import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";


const PrivateHome = () => {
    // const bool = false

    const token = useSelector(state => state.user.token)


    return (
        token===null ?<LandingPage/> :<Dashboard/>

    );
};

export default PrivateHome;