import Button from "../../components/FormComponents/Button";
import { Link } from "react-router-dom";
import CircularTopBottom from "../../components/shared/CircularTopBottom";

const ErrorPage = () => {

    return (
        <div id='container' className={`min-h-[100vh] flex flex-col justify-between`}>
            <div className="h-[125px] w-full bg-[#0C46C4] relative">
                <h2
                    className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-xl md:text-2xl lg:text-3xl font-medium text-white whitespace-nowrap"
                >Nautara Abiunnessa B.L. High School</h2>
            </div>

            {/* error message */}
            <div className="flex flex-col justify-start items-center gap-7">
                <h2 className="text-2xl font-semibold text-error">Oops! Page Not Found!</h2>
                <Link
                    to={'/'}
                >
                    <Button nameText={'Go Home'} />
                </Link>
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

export default ErrorPage;