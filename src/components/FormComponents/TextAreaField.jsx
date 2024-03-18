import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const TextAreaField = ({
    name,
    icon,
    id,
    nameText,
    placeholder,
    rows,
    columns,
    marginTop,
    marginBottom,
    inputPadding,
    borderFull,
    borderColor,
    borderColorOnFocus,
    customAtts,
    isRequired,
    errorMessage,
    children
}) => {
    const containerStyle = { marginTop, marginBottom };
    const inputStyle = { padding: `${inputPadding}px` }

    const fieldMotion = {
        initial: {
            y: 75,
            rotate: 7,
        },
        whileInView: {
            y: 0,
            rotate: 0,
        },
        transition: {
            type: 'spring',
            duration: 0.12,
            bounce: 0.4,
            // ease: 'linear',
        }
    }

    return (
        <motion.div {...fieldMotion} viewport={{once: true}} className="flex flex-col items-start group transition-all duration-500" style={containerStyle}>
            {/* label for the input field */}
            <label className="font-open-sans text-base md:text-lg lg:text-xl group-focus-within:text-lg group-focus-within:md:text-xl group-focus-within:lg:text-2xl transition-all duration-500" htmlFor={id}>
                {nameText}{isRequired && <span className='text-[red]'>*</span>} {errorMessage && <span className='text-[red]'>{errorMessage}</span>}
            </label>

            {/* container for the input field and icon */}
            <div
                className={`flex w-full gap-3 my-3 ${borderFull ? "border-[2px] focus-within:border-[3px] rounded-xl" : "border-b-[3px]"} ${`${borderColor || 'border-[#B3B3B3]'} ${borderColorOnFocus || 'focus-within:border-[#575757]'}`} transition-all duration-500`}
            >
                {/* main input field with styles and custom attributes */}
                <textarea
                    name={name}
                    id={id}
                    className="font-open-sans flex-grow focus:outline-none bg-transparent whitespace-pre-wrap"
                    placeholder={placeholder}
                    style={inputStyle}
                    rows={rows}
                    cols={columns}
                    required={isRequired}
                    {...customAtts}
                >
                    {children}
                </textarea>
                {
                    // icon for the input field on the right side
                    icon && <img
                        src={icon}
                        className='w-4 select-none'
                        draggable='false'
                        alt={`${name} - icon`}
                    />
                }
            </div>
        </motion.div>
    );
};

TextAreaField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string,
    nameText: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    columns: PropTypes.number,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    inputPadding: PropTypes.number,
    borderFull: PropTypes.bool,
    borderColor: PropTypes.string,
    borderColorOnFocus: PropTypes.string,
    customAtts: PropTypes.object,
    isRequired: PropTypes.bool,
    errorMessage: PropTypes.string,
    children: PropTypes.node,
}

export default TextAreaField;