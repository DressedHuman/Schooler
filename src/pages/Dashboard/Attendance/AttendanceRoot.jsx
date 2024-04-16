import { Outlet } from "react-router-dom";
import attendanceWhiteLogo from '/dashboard/whiteVersions/AttendanceWhite.png';
import RectHeader from "../../../components/shared/RectHeader/RectHeader";
import CircularTopBottom from "../../../components/shared/CircularTopBottom";

const AttendanceRoot = () => {
    return (
        <div id='container' className={`min-h-[100vh] flex flex-col justify-between`}>
            {/* header with rectangular background and a icon with title */}
            <RectHeader
                backgroundColor={'bg-[#0C46C4]'}
                icon={attendanceWhiteLogo}
                iconWidth={'w-[50px] md:w-[75px]'}
                iconHeight={'h-[50px] md:h-[75px]'}
                title={'Attendance'}
                textColor={'white'}
                flexPosition={'items-center'}
                containerPadding={'pl-16 md:pl-[88px] lg:pl-28'}
            />

            <div className="flex-1">
                <Outlet />
            </div>

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

export default AttendanceRoot;