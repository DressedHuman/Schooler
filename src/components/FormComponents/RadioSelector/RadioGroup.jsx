import PropTypes from 'prop-types';
import Radio from './Radio';

const RadioGroup = ({
    labelText,
    radioOptions,
    idProperty,
    labelTextProperty,
    handleRadioChange,
    checkedRadio,
    isRequired,
    errorMessage,
}) => {
    return (
        <div className="flex flex-col items-start gap-3 group transition-all duration-500">
            <div
                className="font-open-sans text-base md:text-lg lg:text-xl group-focus-within:text-lg group-focus-within:md:text-xl group-focus-within:lg:text-2xl transition-all duration-500 flex justify-between items-center w-full"
            >
                <h2>{labelText}{isRequired && <span className='text-[red]'>*</span>}</h2>{errorMessage && <h2 className='text-[red]'>{errorMessage}</h2>}
            </div>
            <div className='w-full flex justify-center items-start gap-2 flex-nowrap z-0'>
                {
                    radioOptions.map((option, idx) => <Radio
                        key={idx}
                        id={idProperty ? option[idProperty] : idx}
                        labelText={labelTextProperty ? option[labelTextProperty] : option}
                        // value={valueProperty ? option[valueProperty] : option}
                        value={option}
                        checkedValue={checkedRadio}
                        handlerOnChange={handleRadioChange}
                    />)
                }
            </div>
        </div>
    );
};

RadioGroup.propTypes = {
    labelText: PropTypes.string,
    radioOptions: PropTypes.array,
    idProperty: PropTypes.string,
    labelTextProperty: PropTypes.string,
    // valueProperty: PropTypes.string,
    handleRadioChange: PropTypes.func,
    checkedRadio: PropTypes.object,
    isRequired: PropTypes.bool,
    errorMessage: PropTypes.string,
}

export default RadioGroup;