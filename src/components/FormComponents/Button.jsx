import PropTypes from 'prop-types';

const Button = ({ name, type, nameText, }) => {
    return (
        <button type={type} name={name} className='btn border-2 border-[#0C46C4] text-lg md:text-xl text-[#0C46C4] px-12 py-4 h-auto font-open-sans bg-transparent hover:border-[#0C46C4] hover:text-white transition-all duration-1000 shadow-[inset_0_0_#0C46C4] hover:shadow-[inset_32vw_0_#0C46C4] hover:md:shadow-[inset_18vw_0_#0C46C4] hover:lg:shadow-[inset_10vw_0_#0C46C4]' >{nameText}</button>
    );
};

Button.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    nameText: PropTypes.string,
}

export default Button;