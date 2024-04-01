import { useContext } from "react";
import CircularTopWithLogo from "../../components/shared/CircularTopWithLogo";
import { AuthContext } from "../../providers/AuthProvider";
import IconWithText from "../../components/shared/IconWithText";
import { Link, useLoaderData } from "react-router-dom";
import LogoCircle from "../../components/shared/LogoCircle";
import CircularTopBottom from "../../components/shared/CircularTopBottom";

const Dashboard = () => {
    const { logo } = useContext(AuthContext);
    const dashboardData = useLoaderData();

    return (
        <div id='container' className={`min-h-[100vh] flex flex-col justify-between`}>
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



            {/* circular bottom */}
            <div className='relative mt-12'>
                <CircularTopBottom background={'#0C46C4'} containerHeight={'h-[21vw] md:h-[12vw] lg:h-[14vh]'} circleHeight={'h-[42vw] md:h-[24vw] lg:h-[28vh]'} isTop={false} />
                <div className='absolute left-10 right-10 top-10 bottom-2 md:bottom-5 flex flex-col justify-center items-center text-white font-medium'>
                    <div className="flex flex-col justify-end md:justify-center items-center lg:gap-1 scale-90 lg:scale-100">
                        <h2 className="text-base md:text-lg lg:text-xl font-normal">Nautara Abiunnessa B.L. High School</h2>
                        <p>
                            <span
                                className='text-sm md:text-base lg:text-lg font-normal'
                            >Developed by:
                            </span>&nbsp;<a
                                href='https://facebook.com/dressed.human'
                                className='hover:text-[yellow] text-sm md:text-base lg:text-lg font-normal'
                            >
                                Motiur Rahman Mizan
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;