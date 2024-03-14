import PropTypes from 'prop-types';
import Radio from './Radio';
import { useState } from 'react';

const RadioGroup = ({ radioOptions, idProperty, nameProperty, nameTextProperty, valueProperty, }) => {
    const [checkedRadio, setCheckedRadio] = useState(null);

    // handler for checked radio option on change
    const handleRadioChange = value => {
        setCheckedRadio(value);
        // console.log(checkedRadio);
    }

    return (
        <div className='flex justify-center items-center gap-2 flex-wrap z-0'>
            {
                radioOptions.map((option, idx) => <Radio
                    key={idx}
                    id={idProperty ? option[idProperty] : idx}
                    name={nameProperty ? option[nameProperty] : option}
                    labelText={nameTextProperty ? option[nameTextProperty] : option}
                    value={valueProperty ? option[valueProperty] : option}
                    checkedValue={checkedRadio}
                    handlerOnChange={handleRadioChange}
                />)
            }
        </div>
    );
};

RadioGroup.propTypes = {
    radioOptions: PropTypes.array,
    idProperty: PropTypes.string,
    nameProperty: PropTypes.string,
    nameTextProperty: PropTypes.string,
    valueProperty: PropTypes.string,
}

export default RadioGroup;