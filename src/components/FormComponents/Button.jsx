import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ name, type, nameText, customStyle, initialTranslateY }) => {
    const fieldMotion = {
        initial: {
            // opacity: 0,
            scale: 0.85,
            y: initialTranslateY,
            rotate: -12,
        },
        whileInView: {
            // opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
        },
        transition: {
            type: "spring",
            duration: .12,
            // bounce: 0.4,
            // ease: 'linear',
        }
    }

    return (
        <motion.button {...fieldMotion} type={type} name={name} className={`btn border-2 border-[#0C46C4] text-lg md:text-xl text-[#0C46C4] w-44 py-4 h-auto font-open-sans bg-transparent hover:border-[#0C46C4] hover:text-white transition-all duration-1000 shadow-[inset_0_0_#0C46C400] hover:shadow-[inset_168px_0_#0C46C4FF] hover:rotate-6 ${customStyle}`} >{nameText}</motion.button>
    );
};

Button.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    nameText: PropTypes.string,
    initialTranslateY: PropTypes.number,
    customStyle: PropTypes.string,
}

export default Button;