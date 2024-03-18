import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { createContext, useState } from 'react';


export const selectContext = createContext();

const SelectField = ({ name, icon, id, nameText, optionName, marginTop, marginBottom, selectPadding, borderFull, borderColor, borderColorOnFocus, customAtts, isRequired, children, handlerOnSelect, errorMessage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerStyle = { marginTop, marginBottom };
    const selectStyle = { padding: `${selectPadding}px` }

    const fieldMotion = {
        initial: {
            y: 75,
            rotate: -12,
        },
        whileInView: {
            y: 0,
            rotate: 0,
        },
        transition: {
            duration: 0.12,
            bounce: 0.4,
            ease: 'linear',
        }
    }

    return (
        <motion.div {...fieldMotion} viewport={{ once: true }} className="flex flex-col items-start group transition-all duration-500" style={containerStyle}>
            {/* label for the input field */}
            <label className="font-open-sans text-base md:text-lg lg:text-xl group-focus-within:text-lg group-focus-within:md:text-xl group-focus-within:lg:text-2xl transition-all duration-500 flex justify-between items-center w-full" htmlFor={id}>
                <h2>{nameText}{isRequired && <span className='text-[red]'>*</span>}</h2>
                <h2>{errorMessage && <span className='text-[red]'>{errorMessage}</span>}</h2>
            </label>

            {/* container for the input field and icon */}
            <div className={`relative w-full gap-3 my-3 ${borderFull ? "border-[2px] focus-within:border-[3px] rounded-xl" : "border-b-[3px]"} ${`${borderColor || 'border-[#B3B3B3]'} ${borderColorOnFocus || 'focus-within:border-[#575757]'}`} transition-all duration-500`}>
                {/* main input field with styles and custom attributes */}
                {/* dropdown - btn */}
                <div
                    onClick={() => {
                        children.length>0 && setIsOpen(!isOpen);
                    }}
                    className="mx-auto flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border"
                    style={selectStyle}
                    {...customAtts}
                >
                    <h1 className="font-medium text-gray-600">{optionName || '-- Choose Option --'}</h1>
                    <svg
                        className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`}
                        width={25}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g>
                    </svg>
                </div>
                {/* dropdown - options  */}
                <div
                    className={`bg-white border-2 border-[#0C46C4]/75 ${isOpen ? 'block top-[112%] left-5 right-5 opacity-100' : 'hidden -top-4 opacity-0'} absolute mx-auto border rounded-xl overflow-hidden duration-300`}
                >
                    <selectContext.Provider value={{ handlerOnSelect, setIsOpen }}>
                        {children}
                    </selectContext.Provider>
                </div>
                {/* <select
                    name={name}
                    id={id}
                    className="font-open-sans flex-grow focus:outline-none bg-transparent"
                    style={selectStyle}
                    {...customAtts}
                    defaultValue={selectedValue}
                    required={isRequired}
                    onChange={handlerOnChange}
                >
                    <option disabled value={selectedValue}>-- Choose Subject --</option>
                    {children}
    </select> */}
                {
                    // icon for the input field on the right side
                    icon && <img src={icon} className='w-4 select-none' draggable='false' alt={`${name} - icon`} />
                }
            </div>
        </motion.div>
    );
};

SelectField.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string,
    nameText: PropTypes.string,
    optionName: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    selectPadding: PropTypes.number,
    borderFull: PropTypes.bool,
    borderColor: PropTypes.string,
    borderColorOnFocus: PropTypes.string,
    customAtts: PropTypes.object,
    isRequired: PropTypes.bool,
    handlerOnSelect: PropTypes.func,
    errorMessage: PropTypes.string,
    children: PropTypes.node,
}

export default SelectField;