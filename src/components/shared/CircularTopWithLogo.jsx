import CircularTopBottom from "./CircularTopBottom";
import PropTypes from 'prop-types';
import LogoCircle from "./LogoCircle";

const CircularTopWithLogo = ({ logo, color, height, radius, padding, borderWidth, borderColor, logoUp }) => {

    return (
        <div>
            <CircularTopBottom background={color} isTop={true} height={height} />
            <div className="flex justify-center">
                <LogoCircle logo={logo} radius={radius} padding={padding} borderWidth={borderWidth} borderColor={borderColor} logoUp={logoUp} />
            </div>
        </div>
    );
};

CircularTopWithLogo.propTypes = {
    logo: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
    radius: PropTypes.number,
    padding: PropTypes.number,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    logoUp: PropTypes.bool,
}

export default CircularTopWithLogo;