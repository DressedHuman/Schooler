import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import PropTypes from 'prop-types';

const SchoolLoader = ({ width, fontSize, bounce }) => {
    const { schoolName, logo } = useContext(AuthContext);

    const logoStyle = { width: `${width && `${width}px` || '175px'}` }
    const nameStyle = { fontSize: `${fontSize && `${fontSize}rem`}` }
    
    return (
        <div className='w-full h-full flex flex-col justify-center items-center -mt-32'>
            <img src={logo} alt="Logo of Schooler" className={`${bounce && 'animate-bounce'} rounded-[50%] bg-[rgb(51_65_85)]`} style={logoStyle} />
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-medium md:font-semiboldd text-blue-700 ${bounce && 'animate-bounce'}`} style={nameStyle}>{schoolName}</h2>
        </div>
    );
};

SchoolLoader.propTypes = {
    width: PropTypes.number,
    fontSize: PropTypes.number,
    bounce: PropTypes.bool,
}

export default SchoolLoader;