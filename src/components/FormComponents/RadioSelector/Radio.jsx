import PropTypes from 'prop-types';

const Radio = ({ id, name, labelText, value, bgColor, bgColorOnChecked, textColor, textColorOnChecked, checkedValue, handlerOnChange }) => {
    return (
        <button
            id={id}
            name={name}
            className={`w-1/4 md:w-1/6 h-12 flex justify-center items-center rounded-xl ${bgColor || 'bg-[gray]'} ${textColor || 'text-white'} ${checkedValue === value ? (bgColorOnChecked || 'bg-[green]') : 'bg-[gray]'} checked:${textColorOnChecked || 'text-white'} z-0 cursor-pointer`}
            onClick={() => handlerOnChange(value)}
        >
            {labelText}
        </button>
    );
};

Radio.propTypes = {
    id: PropTypes.any,
    name: PropTypes.string,
    labelText: PropTypes.string,
    value: PropTypes.any,
    bgColor: PropTypes.string,
    bgColorOnChecked: PropTypes.string,
    textColor: PropTypes.string,
    textColorOnChecked: PropTypes.string,
    checkedValue: PropTypes.any,
    handlerOnChange: PropTypes.func,
}

export default Radio;