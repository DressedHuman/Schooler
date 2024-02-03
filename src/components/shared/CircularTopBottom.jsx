import PropTypes from 'prop-types';

const CircularTopBottom = ({ background, containerHeight, circleHeight, isTop }) => {
    const circleStyle = { backgroundColor: background, top: `${isTop ? 'auto' : 0}`, bottom: `${isTop ? 0 : 'auto'}` };

    return (
        <div className={`relative overflow-hidden ${containerHeight}`} >
            <div className={`rounded-[50%] absolute left-0 right-0 ${circleHeight}`} style={circleStyle}></div>
        </div>
    );
};

CircularTopBottom.propTypes = {
    background: PropTypes.string,
    containerHeight: PropTypes.string,
    circleHeight: PropTypes.string,
    isTop: PropTypes.bool,
}

export default CircularTopBottom;