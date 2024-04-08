import { useContext, useRef } from "react";
import InputLogoCircle from "../../../components/AddAccount/InputLogoCircle";
import CircularTopWithLogo from "../../../components/shared/CircularTopWithLogo";
import { AuthContext } from "../../../providers/AuthProvider";
import AddAccountForm from "../../../components/AddAccount/AddAccountForm";
import CircularTopBottom from "../../../components/shared/CircularTopBottom";

const AddAccount = () => {
    const { logo } = useContext(AuthContext);
    const uploadingPhotoRef = useRef();

    return (
        <div className="space-y-12">
            <CircularTopWithLogo color={'#28C2A0'} height={21} zIndex={9990} >
                <InputLogoCircle logo={logo} width={`w-[135px] md:w-[157px] lg:w-[195px]`} height={`h-[135px] md:h-[157px] lg:h-[195px]`} padding={1} borderWidth={5} borderColor={'#28C2A0'} photoRef={uploadingPhotoRef} logoUp logoUpMarginTop={`-mt-[67.5px] md:-mt-[77.5px] lg:-mt-[97.5px]`} />
            </CircularTopWithLogo>

            {/* add new account form */}
            <AddAccountForm studentPhotoRef={uploadingPhotoRef} />


            {/* circular bottom */}
            <div className='relative mt-12'>
                <CircularTopBottom background={'#0C46C4'} containerHeight={'h-[21vw] md:h-[12vw] lg:h-[14vh]'} circleHeight={'h-[42vw] md:h-[24vw] lg:h-[28vh]'} isTop={false} />
                <div className='absolute left-10 right-10 top-10 bottom-2 md:bottom-5 flex flex-col justify-center items-center text-white font-medium'>
                    <div className="flex flex-col justify-end md:justify-center items-center lg:gap-1 scale-90 lg:scale-100">
                        <h2 className="text-base md:text-lg font-normal whitespace-nowrap">Nautara Abiunnessa B.L. High School</h2>
                        <p
                            className='text-sm font-normal'
                        >
                            <span>Developed by:</span>&nbsp;<a
                                href='https://facebook.com/dressed.human'
                                className='hover:text-[yellow]'
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

export default AddAccount;