import PropTypes from 'prop-types';

const CircularTopBottom = ({ background, isTop, height }) => {
    return (
        <div className={`h-[${height}vh] relative overflow-hidden`}>
            <div className={`h-[${height*2}vh] bg-[${background}] rounded-[50%] absolute left-0 right-0 ${isTop ? 'bottom-0' : 'top-0'}`}></div>
        </div>
    );
};

CircularTopBottom.propTypes = {
    background: PropTypes.string,
    isTop: PropTypes.bool,
    height: PropTypes.number,
}

export default CircularTopBottom;