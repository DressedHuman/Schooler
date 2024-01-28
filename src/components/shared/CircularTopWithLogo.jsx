import { useContext } from "react";
import CircularTopBottom from "./CircularTopBottom";
import { AuthContext } from "../../providers/AuthProvider";
import PropTypes from 'prop-types';

const CircularTopWithLogo = ({ color, height, radius, padding, borderWidth, borderColor }) => {
    const { logo } = useContext(AuthContext);

    return (
        <div>
            <CircularTopBottom background={color} isTop={true} height={height} />
            <div className="flex justify-center">
                <div className={`w-[${radius}px] h-[${radius}px] border-[${borderWidth}px] border-[${borderColor}] -mt-[${radius/2}px] z-10 rounded-[50%] bg-white p-${padding} flex justify-center items-center`}>
                    <img src={logo} alt="School Name" className="w-full" />
                </div>
            </div>
        </div>
    );
};

CircularTopWithLogo.propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
    radius: PropTypes.number,
    padding: PropTypes.number,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
}

export default CircularTopWithLogo;