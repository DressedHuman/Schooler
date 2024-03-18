import PropTypes from 'prop-types';

const Radio = ({ id, labelText, value, bgColor, bgColorOnChecked, textColor, textColorOnChecked, checkedValue, handlerOnChange }) => {
    return (
        <input
            type='button'
            id={id}
            className={`flex-1 h-12 flex justify-center items-center rounded-xl ${bgColor || 'bg-[gray]'} ${textColor || 'text-white'} ${checkedValue === value ? (bgColorOnChecked || 'bg-[green]') : 'bg-[gray]'} ${checkedValue === value && (textColorOnChecked || 'text-white')} z-0 cursor-pointer`}
            onClick={() => handlerOnChange(value)}
            value={labelText}
        />
    );
};

Radio.propTypes = {
    id: PropTypes.any,
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