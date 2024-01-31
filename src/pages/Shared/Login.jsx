import { useContext } from "react";
import CircularTopWithLogo from "../../components/shared/CircularTopWithLogo";
import { AuthContext } from "../../providers/AuthProvider";
import LoginForm from "../../components/Login/LoginForm";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { logo } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const user = {userId: form.userId.value, password: form.password.value};
        console.log(user);
        location?.state && navigate(location.state?.from) || navigate('/');
    }

    return (
        <div>
            {/* <h2 className="text-2xl font-medium text-lime-700">This is the login page.</h2> */}
            <CircularTopWithLogo logo={logo} color={'#28C2A0'} height={21} radius={195} padding={7} borderColor={'#28C2A0'} borderWidth={5} logoUp />

            {/* login form here */}
            <LoginForm handleLogin={handleLogin} />
        </div>
    );
};

export default Login;