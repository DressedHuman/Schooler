import PropTypes from 'prop-types';

const CircularTopBottom = ({ background, isTop, height }) => {
    const containerStyle = { height: `${height}vh` };
    const circleStyle = { height: `${height * 2}vh`, backgroundColor: background, top: `${isTop ? 'auto' : 0}`, bottom: `${isTop ? 0 : 'auto'}` };

    return (
        <div className={`relative overflow-hidden`} style={containerStyle}>
            <div className={`rounded-[50%] absolute left-0 right-0`} style={circleStyle}></div>
        </div>
    );
};

CircularTopBottom.propTypes = {
    background: PropTypes.string,
    isTop: PropTypes.bool,
    height: PropTypes.number,
}

export default CircularTopBottom;