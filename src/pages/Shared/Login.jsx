import { useContext } from "react";
import CircularTopWithLogo from "../../components/shared/CircularTopWithLogo";
import { AuthContext } from "../../providers/AuthProvider";
import LoginForm from "../../components/Login/LoginForm";
import { useLocation, useNavigate } from "react-router-dom";
import LogoCircle from "../../components/shared/LogoCircle";

const Login = () => {
    const { logo } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const user = { userId: form.userId.value, password: form.password.value };
        console.log(user);
        location?.state && navigate(location.state?.from) || navigate('/');
    }

    return (
        <div className="space-y-16">
            {/* <h2 className="text-2xl font-medium text-lime-700">This is the login page.</h2> */}
            <CircularTopWithLogo color={'#28C2A0'} height={21} zIndex={9990} isSticky >
                <LogoCircle logo={logo} width={`w-[135px] md:w-[157px] lg:w-[195px]`} height={`h-[135px] md:h-[157px] lg:h-[195px]`} padding={1} borderColor={'#28C2A0'} borderWidth={5} logoUp logoUpMarginTop={`-mt-[67.5px] md:-mt-[77.5px] lg:-mt-[97.5px]`} />
            </CircularTopWithLogo>

            {/* login form here */}
            <LoginForm handleLogin={handleLogin} />
        </div>
    );
};

export default Login;