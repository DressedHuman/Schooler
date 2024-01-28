import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SchoolLoader = () => {
    const { schoolName, logo} = useContext(AuthContext);
    
    return (
        <div className='w-full h-full flex flex-col justify-center items-center -mt-32'>
            <img src={logo} alt="Logo of Schooler" className='w-[175px] animate-bounce' />
            <h2 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold text-blue-700 animate-bounce'>{schoolName}</h2>
        </div>
    );
};

export default SchoolLoader;