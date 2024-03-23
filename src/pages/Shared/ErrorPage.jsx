import { useContext } from "react";
import CircularTopWithLogo from "../../components/shared/CircularTopWithLogo";
import LogoCircle from "../../components/shared/LogoCircle";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../../components/FormComponents/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const { logo } = useContext(AuthContext);

    return (
        <div className="min-h-[100vh] grid grid-cols-1 auto-rows-fr">
            <CircularTopWithLogo color={'#28C2A0'} height={21} zIndex={9990} isSticky >
                <LogoCircle logo={logo} width={`w-[135px] md:w-[157px] lg:w-[195px]`} height={`h-[135px] md:h-[157px] lg:h-[195px]`} padding={1} borderWidth={5} borderColor={'#28C2A0'} logoUp logoUpMarginTop={`-mt-[67.5px] md:-mt-[77.5px] lg:-mt-[97.5px]`} />
            </CircularTopWithLogo>

            {/* error message */}
            <div className="flex flex-col justify-start items-center gap-7">
                <h2 className="text-2xl font-semibold text-error">Oops! Page Not Found!</h2>
                <Link
                    to={'/'}
                >
                    <Button nameText={'Go Home'} />
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;