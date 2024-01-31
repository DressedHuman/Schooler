import PropTypes from 'prop-types';

const LogoCircle = ({ logo, radius, borderWidth, borderColor, padding, logoUp }) => {
    const containerStyle = {backgroundColor: 'rgb(51 65 85)', width: `${radius}px`, height: `${radius}px`, border: `${borderWidth}px solid ${borderColor || 'white'}`, padding: `${padding * 4}px`, marginTop: `${logoUp ? `-${radius / 2}px` : 'auto'}` }

    return (
        <div className={`z-10 rounded-[50%] bg-white flex justify-center items-center`} style={containerStyle}>
            <img src={logo} alt="School Name" className="w-full" />
        </div>
    );
};

LogoCircle.propTypes = {
    logo: PropTypes.string,
    radius: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    padding: PropTypes.number,
    logoUp: PropTypes.bool,
}

export default LogoCircle;