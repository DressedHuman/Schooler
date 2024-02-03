import CircularTopBottom from "./CircularTopBottom";
import PropTypes from 'prop-types';

const CircularTopWithLogo = ({ color, isSticky, children, zIndex }) => {
    const style = {position: `${isSticky && 'sticky'}`, top: '0', zIndex};

    return (
        <div style={style}>
            <CircularTopBottom background={color} containerHeight={'h-[21vw] md:h-[12vw] lg:h-[21vh]'} circleHeight={'h-[42vw] md:h-[24vw] lg:h-[42vh]'} isTop />
            <div className="flex justify-center">
                {children}
            </div>
        </div>
    );
};

CircularTopWithLogo.propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
    isSticky: PropTypes.bool,
    zIndex: PropTypes.number,
    children: PropTypes.node,
}

export default CircularTopWithLogo;