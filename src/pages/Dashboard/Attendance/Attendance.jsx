import { Link } from "react-router-dom";
import RectHeader from "../../../components/shared/RectHeader/RectHeader";
import attendanceWhiteLogo from '/dashboard/whiteVersions/AttendanceWhite.png';
import CircularTopBottom from "../../../components/shared/CircularTopBottom";

const Attendance = () => {
    const classes = [
        {
            name: 'Six',
            value: 6,
        },
        {
            name: 'Seven',
            value: 7,
        },
        {
            name: 'Eight',
            value: 8,
        },
        {
            name: 'Nine',
            value: 9,
        },
        {
            name: 'Ten',
            value: 10,
        },
    ]
    return (
        <div id='container' className={`min-h-[100vh] flex flex-col justify-between`}>
            {/* header with rectangular background and a icon with title */}
            <RectHeader backgroundColor={'bg-[#0C46C4]'} icon={attendanceWhiteLogo} iconWidth={'w-[50px] md:w-[75px]'} iconHeight={'h-[50px] md:h-[75px]'} title={'Attendance'} textColor={'white'} flexPosition={'items-center'} containerPadding={'pl-16 md:pl-[88px] lg:pl-28'} />

            {/* select class for attendance */}
            {/* <div className="my-12 ml-7 space-y-7"> */}
            <div className="w-full h-full flex flex-col justify-center items-center gap-7 flex-wrap my-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[green]">Choose class for attendance</h2>
                <div className="flex justify-center items-center flex-wrap gap-3 md:gap-5 lg:gap-7 mx-2 ">
                    {
                        classes.map(cls => <Link
                            key={cls.value}
                            to={`${cls.value}`}
                        >
                            <button
                                className="w-[80px] md:w-[100px] lg:w-[125px] px-3 md:px-5 lg:px-7 py-4 text-center bg-[#0C46C4] text-base md:text-lg lg:text-xl font-medium text-white rounded-xl"
                            >
                                {cls.name}
                            </button>
                        </Link>)
                    }
                </div>
            </div>

            {/* circular bottom */}
            <div className='relative mt-7'>
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

export default Attendance;