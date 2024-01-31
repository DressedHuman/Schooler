import PropTypes from 'prop-types';

const InputField = ({ name, type, icon, id, nameText, placeholder, marginTop, marginBottom }) => {
    const style = {marginTop, marginBottom};

    return (
        <div className="flex flex-col items-start border-b-[3px] border-[#B3B3B3] group" style={style}>
                <label className="font-open-sans text-base md:text-lg lg:text-xl group-focus-within:text-lg group-focus-within:md:text-xl group-focus-within:lg:text-2xl transition-all duration-500" htmlFor={id}>
                    {nameText}
                </label>
                <div className='flex w-full gap-3 my-3'>
                    <input type={type} name={name} id={id} className="font-open-sans flex-grow focus:outline-none bg-transparent" placeholder={placeholder} />
                    <img src={icon} className='w-4 select-none' draggable='false' alt={`${name} - icon`} />
                </div>
            </div>
    );
};

InputField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string,
    nameText: PropTypes.string,
    placeholder: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
}

export default InputField;