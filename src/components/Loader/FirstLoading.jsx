import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SchoolLoader from './SchoolLoader';
import CircularTopBottom from '../shared/CircularTopBottom';

const FirstLoading = () => {
    const { setFirstIsLoading } = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleTransitionEnd = () => {
            setFirstIsLoading(false);
        };

        const container = document.querySelector('#container');

        const timeoutId = setTimeout(() => {
            setIsVisible(false);
            container.removeEventListener('transitionend', handleTransitionEnd);
        // }, 0);
        }, import.meta.env.VITE_FIRST_LOADING_TIME || 1753);
        
        container.addEventListener('transitionend', handleTransitionEnd);
        // timeoutIds.push(setTimeout(() => setFirstIsLoading(false), 757))

        return () => {
            clearTimeout(timeoutId);
            container.removeEventListener('transitionend', handleTransitionEnd);
        }
    });

    return <div id='container' className={`min-h-[100vh] flex flex-col justify-between transition-opacity duration-[75ms] [1757ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className='h-[20vh] lg:h-[25vh] overflow-hidden relative'>
            <div className='w-[70vw] lg:w-[57vw] h-[57vw] rounded-[50%] bg-[#28C2A0] shadow-md shadow-[#5557] absolute bottom-12 lg:bottom-7 -left-[20vw] lg:-left-[28.5vw]'></div>
        </div>
        <SchoolLoader bounce={import.meta.env.VITE_BOUNCE_LOADER_BOOL === 'true'} />
        <div className='relative'>
            <CircularTopBottom background={'#0C46C4'} containerHeight={'h-[21vw] md:h-[12vw] lg:h-[21vh]'} circleHeight={'h-[42vw] md:h-[24vw] lg:h-[42vh]'} isTop={false} />
            <div className='absolute left-10 right-10 top-10 bottom-10 flex flex-col justify-center items-center text-white font-medium'>
                <p>
                    <span className='font-normal'>Developed by:</span> <a href='https://facebook.com/dressed.human' className='hover:text-[yellow]'>Motiur Rahman Mizan</a>
                </p>
            </div>
        </div>
    </div>
}

export default FirstLoading;