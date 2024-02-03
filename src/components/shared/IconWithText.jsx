import PropTypes from 'prop-types';

const IconWithText = ({ icon, iconAltText, iconBackground, iconPadding, iconRadius, text, gap, textColor, fontWeight, isCol, customContainerStyle }) => {
    // container style
    const containerStyle = { ...customContainerStyle, gap, flexDirection: `${isCol && 'column'}` }
    // style for the icon
    const iconStyle = { backgroundColor: `${iconBackground || '#0C46C4'}`, padding: `${iconPadding}px`, borderRadius: `${iconRadius}px`, };
    // style for the text
    const textStyle = { color: textColor, fontWeight };

    return (
        <div className='flex items-center group' style={containerStyle}>
            <img src={icon} alt={iconAltText} className='w-[100px] lg:w-[125px] h-[100px] lg:h-[125px] rounded-2xl border-4 border-transparent group-hover:border-[#BF5757] group-hover:rounded-[32px] transition-all duration-700' style={iconStyle} draggable='false' />
            <p style={textStyle} className='font-open-sans text-base md:text-lg lg:text-xl group-hover:text-lg group-hover:md:text-xl group-hover:lg:text-[22px] group-hover:text-[#BF5757] group-hover:font-medium transition-all duration-700' draggable='false'>{text}</p>
        </div>
    );
};

IconWithText.propTypes = {
    customContainerStyle: PropTypes.object,
    icon: PropTypes.string,
    iconAltText: PropTypes.string,
    iconBackground: PropTypes.string,
    iconPadding: PropTypes.number,
    iconRadius: PropTypes.number,
    text: PropTypes.string,
    gap: PropTypes.number,
    textColor: PropTypes.string,
    fontWeight: PropTypes.number,
    isCol: PropTypes.bool,
}

export default IconWithText;