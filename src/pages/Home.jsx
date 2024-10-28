import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";


const Home = () => {
    const bool = false

    const token = useSelector(state => state.user.token)

    // console.log(token);
    


    return (
        token===null ? <LandingPage/>:<Dashboard/>

    );
};

export default Home;