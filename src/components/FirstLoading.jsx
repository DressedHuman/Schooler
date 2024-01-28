import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import SchoolLoader from './SchoolLoader';

const FirstLoading = () => {
    const { setFirstIsLoading } = useContext(AuthContext);

    useEffect(() => {
        const loadingId = setTimeout(() => setFirstIsLoading(false), 757);

        return () => clearTimeout(loadingId);
    });
    
    return <div className='min-h-[100vh] flex flex-col justify-between'>
        <div className='h-[25vh] overflow-hidden relative'>
            <div className='w-[57vw] h-[57vw] rounded-[50%] bg-[#28C2A0] shadow-md shadow-[#5557] absolute bottom-12 lg:bottom-7 -left-[28.5vw]'></div>
        </div>
        <SchoolLoader />
        <div className="h-[21vh] flex justify-center overflow-hidden">
            <div className={`w-[100vw] h-[42vh] bg-[#0C46C4] rounded-[50%]`}></div>
        </div>
    </div>
}

export default FirstLoading;