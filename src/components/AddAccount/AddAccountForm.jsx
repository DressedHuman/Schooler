import Button from "../FormComponents/Button";
import InputField from "../FormComponents/inputField";
import SelectField from '../FormComponents/DropDownMenu/Select';
import { useState } from "react";
import PropTypes from 'prop-types';

// form for adding student account
const AddAccountForm = ({ studentPhoto }) => {
    const [allValid, setAllValid] = useState(false); // boolean if all fields are valid
    // const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const bangladeshiPhoneNumberRegex = /^(?:\+?88)?01[2-9]\d{8}$/; // regular expression for validating the phone number field



    // handler functions here
    // ---------------------------------------------------------------------------------

    // handler function for checking if the phone number was valid
    const handlePhoneNumberChange = e => {
        const number = e.target.value;
        // setPhoneNumber(number);

        // check if the given phone number was valid
        const isValid = bangladeshiPhoneNumberRegex.test(number);
        setIsValidPhoneNumber(isValid);
        setAllValid(isValid);
    }

    // handler function for form submission
    const handleFormSubmit = e => {
        e.preventDefault();
        if (allValid) {
            const studentForm = new FormData(e.target);
            const studentInfo = {
                name: studentForm.get('name'),
                class: studentForm.get('class'),
                section: studentForm.get('section'),
                roll: studentForm.get('roll'),
                session: studentForm.get('session'),
                email: studentForm.get('email'),
                phone: studentForm.get('phone'),
                photo: studentPhoto,
            };
            console.log(studentInfo);
        }
    }


    return (
        <form onSubmit={handleFormSubmit} className="w-3/4 md:w-2/3 lg:w-1/3 mx-auto text-center">{/* form for adding student account */}
            {/* name input field */}
            <InputField id={'name'} name={'name'} type={'text'} nameText={'Full Name'} placeholder={'ex: Motiur Rahman Mizan'} inputPadding={12} borderFull={true} borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} isRequired />

            {/* class input field */}
            <InputField id={'class'} name={'class'} type={'number'} nameText={'Class'} placeholder={'ex: 10'} inputPadding={12} borderFull customAtts={{ min: 6, max: 10 }} borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} isRequired />

            {/* section input field */}
            {/* <InputField id={'section'} name={'section'} type={'select'} nameText={'Section'} placeholder={`ex: A`} inputPadding={12} borderFull borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} isRequired /> */}
            <SelectField id={'section'} name={'section'} nameText={'Section'} placeholder={`ex: A`} selectPadding={12} borderFull borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} defaultValue={'A'} isRequired >
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </SelectField>

            {/* roll input field */}
            <InputField id={'roll'} name={'roll'} type={'number'} nameText={'Roll No'} placeholder={`002`} inputPadding={12} borderFull borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} customAtts={{ min: 1, max: 375 }} isRequired />

            {/* session year input field */}
            <InputField id={'session'} name={'session'} type={'number'} nameText={'Session Year'} placeholder={`ex: 2020`} inputPadding={12} borderFull borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} customAtts={{ min: 1911, max: new Date().getFullYear() }} isRequired />

            {/* email input field */}
            <InputField id={'email'} name={'email'} type={'email'} nameText={'Email'} placeholder={'ex: student@email.com'} inputPadding={12} borderFull borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} />

            {/* phone number input field */}
            <InputField id={'phone'} name={'phone'} type={'text'} nameText={'Phone Number'} placeholder={`ex: 8801234567890`} inputPadding={12} borderFull borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} isRequired customAtts={{ onChange: handlePhoneNumberChange }} />

            {
                isValidPhoneNumber || <p>Please enter a valid phone number</p>
            }

            {/* submit button */}
            <Button type={'submit'} name={'addStudent'} nameText={'Add Student'} customStyle={'mb-12 mt-9'} initialTranslateY={100} />
        </form>
    );
};

AddAccountForm.propTypes = {
    studentPhoto: PropTypes.string,
}

export default AddAccountForm;