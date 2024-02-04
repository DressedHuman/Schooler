import { useContext, useEffect, useState } from "react";
import CircularTopWithLogo from "../../components/shared/CircularTopWithLogo";
import IconWithText from "../../components/shared/IconWithText";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import LogoCircle from '../../components/shared/LogoCircle';

const Home = () => {
    const [homeData, setHomeData] = useState([]);
    const { logo } = useContext(AuthContext);

    useEffect(() => {
        fetch('/homeData.json')
            .then(res => res.json())
            .then(setHomeData)
            .catch(console.error);
    }, [])

    return (
        <>
            <CircularTopWithLogo color={'#28C2A0'} height={21} zIndex={9990} isSticky >
                <LogoCircle logo={logo} width={`w-[135px] md:w-[157px] lg:w-[195px]`} height={`h-[135px] md:h-[157px] lg:h-[195px]`} padding={1} borderWidth={5} borderColor={'#28C2A0'} logoUp logoUpMarginTop={`-mt-[67.5px] md:-mt-[77.5px] lg:-mt-[97.5px]`} />
            </CircularTopWithLogo>
            <p className="text-lg md:text-xl lg:text-3xl font-open-sans text-center mt-7 text-[#0C46C4] font-semibold">Choose your option</p>
            {/* options for student, teacher, guardian or guest */}
            <div className="flex justify-center flex-wrap gap-5 md:gap-7 mt-5 md:mt-7 lg:mt-16">
                {
                    homeData.map(({ id, name, image, userType }) => <Link key={id} to={'/dashboard'} state={userType}>
                        <IconWithText icon={image} iconPadding={20} text={name} gap={10} isCol pointerEvent />
                    </Link>)
                }
            </div>
        </>
    );
};

export default Home;