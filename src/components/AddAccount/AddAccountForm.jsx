import Button from "../FormComponents/Button";
import InputField from "../FormComponents/inputField";
import SelectField from '../FormComponents/DropDownMenu/Select';
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import RadioGroup from "../FormComponents/RadioSelector/RadioGroup";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import Option from "../FormComponents/DropDownMenu/Option";

// form for adding student account
const AddAccountForm = ({ studentPhotoRef }) => {
    const [allValid, setAllValid] = useState(false); // boolean if all fields are valid
    // const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const bangladeshiPhoneNumberRegex = /^(?:\+?88)?01[2-9]\d{8}$/; // regular expression for validating the phone number field
    const [classes, setClasses] = useState([]);
    const [currentClass, setCurrentClass] = useState(null);
    const [hasGroups, setHasGroups] = useState(false);
    const [currentGroups, setCurrentGroups] = useState([]);
    const [currentGroup, setCurrentGroup] = useState(null);
    const [currentSections, setCurrentSections] = useState([]);
    const [currentSection, setCurrentSection] = useState(null);
    const [currentSectionShowingName, setCurrentSectionShowingName] = useState('');

    // error states
    const [classError, setClassError] = useState('');
    const [groupError, setGroupError] = useState('');
    const [sectionError, setSectionError] = useState('');



    // handler functions here
    // ---------------------------------------------------------------------------------

    const handleClassChange = _class => {
        // const currentClass = _class.name;
        setCurrentClass(_class);
        const _hasGroups = _class.groups.hasGroups;
        const _currentGroups = _class.groups.groups.slice(0, -1);
        setHasGroups(_hasGroups);
        setCurrentGroups(_currentGroups);
        setCurrentGroup(null);
    }


    // handle section change
    const handleSectionChange = value => {
        const sect = currentSections.find(sect => sect.value === value);
        setCurrentSection(sect);
        setCurrentSectionShowingName(sect.name);
    }


    // handle subjects for groups when group is changed
    const handleGroupChange = group => {
        setCurrentGroup(group);
    }

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
            // validating custom form fields
            if (!currentClass) {
                setClassError(`You must select a class!`);
                return toast.error(`You must select a class!`, { toastId: 'classError' });
            } else {
                setClassError('');
            }

            if (!currentSection) {
                setSectionError('You must select a subject!');
                return toast.error('You must select a subject!', { toastId: 'subjectError' });
            } else {
                setSectionError('');
            }

            if (hasGroups && !currentGroup) {
                setGroupError('You must select a group!');
                return toast.error('You must select a group!', { toastId: 'groupError' });
            } else {
                setGroupError('');
            }


            const studentForm = new FormData(e.target);
            const studentInfo = {
                name: studentForm.get('name'),
                class: currentClass,
                section: currentSection,
                group: currentGroup,
                roll: studentForm.get('roll'),
                session: studentForm.get('session'),
                email: studentForm.get('email'),
                phone: studentForm.get('phone'),
                photo: studentPhotoRef.current.files[0] || null,
            };
            console.log(studentInfo);
            return toast.success('You\'ve successfully submitted the form!', { toastId: 'success' });
        }
    }


    useEffect(() => {
        // getting classes
        axios.get(import.meta.env.VITE_URL_CLASSES || 'http://localhost:8000/api/classes')
            .then(res => setClasses(res.data.slice(0, -1)))
            .catch(console.error);


        // setting sections
        const _sections = [
            {
                name: 'A',
                value: '1',
            },
            {
                name: 'B',
                value: '2',
            }
        ];
        setCurrentSections(_sections);
    }, [])


    return (
        <form onSubmit={handleFormSubmit} className="w-3/4 md:w-2/3 lg:w-[47%] mx-auto text-center z-0 space-y-5">{/* form for adding student account */}
            {/* name input field */}
            <InputField id={'name'} name={'name'} type={'text'} nameText={'Full Name'} placeholder={'ex: Motiur Rahman Mizan'} inputPadding={12} borderFull={true} borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} isRequired />

            {/* class input field */}
            {/* <InputField id={'class'} name={'class'} type={'number'} nameText={'Class'} placeholder={'ex: 10'} inputPadding={12} borderFull customAtts={{ min: 6, max: 10 }} borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} isRequired /> */}
            <RadioGroup
                radioOptions={classes}
                idProperty={'name'}
                labelTextProperty={'name'}
                valueProperty={'value'}
                labelText={'Class'}
                handleRadioChange={handleClassChange}
                checkedRadio={currentClass}
                errorMessage={classError}
                isRequired
            />

            {/* section input field */}
            {/* <SelectField id={'section'} name={'section'} nameText={'Section'} placeholder={`ex: A`} selectPadding={12} borderFull borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} defaultValue={'A'} isRequired >
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </SelectField> */}
            <SelectField
                id={'homework-subject'}
                name={'homework-subject'}
                nameText={'Section'}
                optionName={currentSectionShowingName}
                placeholder={`ex: Physics`}
                selectPadding={12}
                borderColor={'border-[#0C46C4A7]'}
                borderColorOnFocus={'border-[#0C46C4]'}
                selectedValue={currentSection}
                customAtts={{ disabled: currentSections.length === 0 }}
                handlerOnSelect={handleSectionChange}
                errorMessage={sectionError}
                borderFull
                isRequired
            >
                {
                    currentSections.map(section => <Option
                        key={section.value}
                        optionName={section.name}
                        optionValue={section.value}
                    />)
                }
            </SelectField>

            {/* group radio field */}
            {
                // showing radio groups instead of select menu
                hasGroups && <RadioGroup
                    idProperty={'id'}
                    labelTextProperty={'name'}
                    valueProperty={'value'}
                    radioOptions={currentGroups}
                    labelText={'Group'}
                    handleRadioChange={handleGroupChange}
                    checkedRadio={currentGroup}
                    errorMessage={groupError}
                    isRequired
                />
            }

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

            {/* toast container */}
            <ToastContainer
                position="bottom-left"
                autoClose={3500}
                hideProgressBar={true}
                newestOnTop={false}
                theme="dark"
                transition={Slide}
                rtl={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </form>
    );
};

AddAccountForm.propTypes = {
    studentPhotoRef: PropTypes.object,
}

export default AddAccountForm;