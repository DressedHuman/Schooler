import { useContext } from "react";
import CircularTopWithLogo from "../../components/shared/CircularTopWithLogo";
import { AuthContext } from "../../providers/AuthProvider";
import IconWithText from "../../components/shared/IconWithText";
import { Link, useLoaderData } from "react-router-dom";
import LogoCircle from "../../components/shared/LogoCircle";

const Dashboard = () => {
    const { logo } = useContext(AuthContext);
    const dashboardData = useLoaderData();

    return (
        <div>
            <CircularTopWithLogo color={'#28C2A0'} height={21} zIndex={9990} isSticky >
                <LogoCircle logo={logo} width={`w-[135px] md:w-[157px] lg:w-[195px]`} height={`h-[135px] md:h-[157px] lg:h-[195px]`} padding={1} borderWidth={5} borderColor={'#28C2A0'} logoUp logoUpMarginTop={`-mt-[67.5px] md:-mt-[77.5px] lg:-mt-[97.5px]`} />
            </CircularTopWithLogo>

            <div className="flex justify-center flex-wrap gap-9 md:gap-12 mt-9 md:mt-12 lg:mt-16">
                {
                    dashboardData.data.map(item => <Link key={item.id} to={item.route}>
                        <IconWithText icon={item.image} fontWeight={400} gap={7} iconAltText={item.name} text={item.name} iconBackground={'transparent'} iconPadding={5} isCol pointerEvent />
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Dashboard;