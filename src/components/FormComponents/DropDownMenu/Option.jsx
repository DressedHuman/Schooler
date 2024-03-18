import { useContext } from "react";
import { selectContext } from "./Select";
import PropTypes from 'prop-types';

const Option = ({ optionName, optionValue}) => {
    const {handlerOnSelect, setIsOpen} = useContext(selectContext);

    const handleSelect = () => {
        setIsOpen(false);
        handlerOnSelect(optionValue);
    }
    return (
        <div
            onClick={handleSelect}
            className="px-6 py-2 text-left text-[333333] hover:text-white hover:bg-gray-500"
        >
            {optionName}
        </div>
    );
};

Option.propTypes = {
    optionName: PropTypes.string,
    optionValue: PropTypes.any,
}

export default Option;