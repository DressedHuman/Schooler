import { Link } from "react-router-dom";

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
        <>
            {/* select class for attendance */}
            {/* <div className="my-12 ml-7 space-y-7"> */}
            <div className="w-full h-full flex flex-col justify-center items-center gap-7 flex-wrap my-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[green]">Choose Class</h2>
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
        </>
    );
};

export default Attendance;