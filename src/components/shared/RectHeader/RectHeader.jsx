import PropTypes from 'prop-types';
import IconWithText from '../IconWithText';

const RectHeader = ({ backgroundColor, icon, iconWidth, iconHeight, title, textColor, flexPosition, containerPadding }) => {
    return (
        <div className={`w-full h-[70px] md:h-[80px] lg:h-[105px] ${backgroundColor} flex ${flexPosition || 'justify-center items-center'} ${containerPadding || ''}`}>
            <IconWithText icon={icon} iconWidth={iconWidth} iconHeight={iconHeight} iconAltText={`${title}-title`} iconPadding={0} iconBackground={'transparent'} text={title} fontWeight={600} textColor={textColor} gap={10} />
        </div>
    );
};

RectHeader.propTypes = {
    backgroundColor: PropTypes.string,
    icon: PropTypes.string,
    iconWidth: PropTypes.string,
    iconHeight: PropTypes.string,
    title: PropTypes.string,
    textColor: PropTypes.string,
    flexPosition: PropTypes.string,
    containerPadding: PropTypes.string,
}

export default RectHeader;