import PropTypes from 'prop-types';

const LogoCircle = ({ logo, width, height, borderWidth, borderColor, padding, logoUp, logoUpMarginTop }) => {
    const containerStyle = {
        backgroundColor: 'rgb(51 65 85)',
        // width: `${radius}px`,
        // height: `${radius}px`,
        border: `${borderWidth}px solid ${borderColor || 'white'}`,
        padding: `${padding * 4}px`,
        // marginTop: `${logoUp ? `-${radius / 2}px` : 'auto'}`
    }

    return (
        <div className={`z-10 rounded-[50%] bg-white flex justify-center items-center ${width} ${height} ${logoUp && logoUpMarginTop}`} style={containerStyle}>
            <img src={logo} alt="School Name" className="w-full h-full object-cover" />
        </div>
    );
};

LogoCircle.propTypes = {
    logo: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    padding: PropTypes.number,
    logoUp: PropTypes.bool,
    logoUpMarginTop: PropTypes.string,
}

export default LogoCircle;