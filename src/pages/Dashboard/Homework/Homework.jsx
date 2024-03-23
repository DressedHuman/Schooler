import { useLoaderData } from "react-router-dom";
import RectHeader from "../../../components/shared/RectHeader/RectHeader";
import homeworkWhiteLogo from '/dashboard/whiteVersions/HomeworkWhite.png';
import Points from "../../../components/shared/Points/Points";
import { useEffect, useState } from "react";
import InputField from "../../../components/FormComponents/inputField";
import SelectField from "../../../components/FormComponents/DropDownMenu/Select";
import Button from "../../../components/FormComponents/Button";

// importing svg icons
import warning from '/warning.svg';
import info from '/information.svg';
import axios from "axios";
import RadioGroup from "../../../components/FormComponents/RadioSelector/RadioGroup";
import TextAreaField from "../../../components/FormComponents/TextAreaField";
import Option from "../../../components/FormComponents/DropDownMenu/Option";

// importing toastify items
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Homework = () => {
    const message = useLoaderData().data;
    const [openModal, setOpenModal] = useState(false);
    const [classes, setClasses] = useState([]);
    // const [groups, setGroups] = useState({});
    const [subjects, setSubjects] = useState([]);


    // current information
    const [currentClass, setCurrentClass] = useState(null);
    const [hasGroups, setHasGroups] = useState(false); //boolean whether a class has groups or not
    const [currentGroups, setCurrentGroups] = useState([]); //set current groups, primarily for class six
    const [currentGroup, setCurrentGroup] = useState(null);
    const [currentSubjects, setCurrentSubjects] = useState([]);
    const [currentSubject, setCurrentSubject] = useState('');
    const [currentSubjectShowingName, setCurrentSubjectShowingName] = useState('');
    const [currentSubjectPart, setCurrentSubjectPart] = useState();

    // current error messages
    const [classError, setClassError] = useState('');
    const [groupError, setGroupError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [dueDateError, setDueDateError] = useState('');

    // --------------------------------------------------------------------------

    // handle groups or subjects for classes when class is changed
    const handleClassChange = _class => {
        // const currentClass = _class.name;
        setCurrentClass(_class);
        const _hasGroups = _class.groups.hasGroups;
        const _currentGroups = _class.groups.groups;
        setHasGroups(_hasGroups);
        setCurrentGroups(_currentGroups);
        setCurrentGroup(null);

        // setting subjects for none group only
        setCurrentSubjects(subjects.filter(sub => sub.groups.includes('none')));
    }


    // handle subjects for groups when group is changed
    const handleGroupChange = group => {
        setCurrentGroup(group);
        const _currentSubjects = subjects.filter(subject => subject.groups.includes(group.value));
        setCurrentSubjects(_currentSubjects);

        // reset the currentSubject when it doesn't belong to currentSubjects
        if (!_currentSubjects.includes(currentSubject)) {
            setCurrentSubject(null);
            setCurrentSubjectShowingName('');
        }
    }


    // handle subject change
    const handleSubjectChange = value => {
        const [subValue, part] = value.split('-');
        const sub = currentSubjects.find(subj => subj.name === subValue);
        setCurrentSubject(sub);
        setCurrentSubjectPart(part || 1);
        setCurrentSubjectShowingName(part ? `${sub.name} - Paper ${part}` : sub.name);
    }


    // handler function for form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // accessing form data
        const title = e.target.homeworkTitle.value;
        const homeworkText = e.target.homeworkText.value;
        const dueDate = e.target.dueDate.value;

        // validating form fields
        if (!currentClass) {
            setClassError(`You must select a class!`);
            return toast.error(`You must select a class!`, {toastId: 'classError'});
        } else {
            setClassError('');
        }

        if (hasGroups && !currentGroup) {
            setGroupError('You must select a group!');
            return toast.error('You must select a group!', {toastId: 'groupError'});
        } else {
            setGroupError('');
        }

        if (!currentSubject) {
            setSubjectError('You must select a subject!');
            return toast.error('You must select a subject!', {toastId: 'subjectError'});
        } else {
            setSubjectError('');
        }

        if (!dueDate) {
            setDueDateError('You must select a due date!');
            return toast.error('You must select a due date!', {toastId: 'dueDateError'});
        } else {
            setDueDateError('');
        }

        const formData = {
            selectedClass: (({ name, value }) => ({ name, value }))(currentClass),
            selectedGroup: currentGroup,
            selectedSubject: (({ name }) => ({ name }))(currentSubject),
            selectedSubjectPart: currentSubjectPart,
            title,
            homeworkText,
            publishedDate: new Date(),
            dueDate,
        };
        // console.log(formData);
        const stringifiedFormData = JSON.stringify(formData);
        toast.success('Form submitted successfully!', {toastId: 'formSubmitSuccessful'})
        console.log(stringifiedFormData);
    }

    useEffect(() => {
        // getting classes
        axios.get(import.meta.env.VITE_URL_CLASSES || 'http://localhost:8000/api/classes')
            .then(res => setClasses(res.data))
            .catch(console.error);

        // getting subjects
        axios.get(import.meta.env.VITE_URL_SUBJECTS || 'http://localhost:8000/api/subjects')
            .then(res => {
                setSubjects(res.data);
            })
            .catch(console.error);
    }, [])

    return (
        <div>
            {/* header with rectangular background and a icon with title */}
            <RectHeader backgroundColor={'bg-[#0C46C4]'} icon={homeworkWhiteLogo} iconWidth={'w-[50px] md:w-[75px]'} iconHeight={'h-[50px] md:h-[75px]'} title={'HOMEWORK'} textColor={'white'} flexPosition={'items-center'} containerPadding={'pl-16 md:pl-[88px] lg:pl-28'} />

            {/* instruction modal to add homework perfectly */}
            {/* modal source: https://navigateui.com/components/modal */}
            <div className="w-[75vw] md:w-72 mx-auto flex items-center justify-center font-open-sans">
                {/* clicking outside the modal message will also close the modal */}
                {/* div with full window overlay */}
                <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-[black]/75 duration-100`}>
                    {/* stopped propagation for event bubble for the main modal content */}
                    {/* main modal here */}
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-[87vw] md:w-[500px] lg:w-[750px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-100 opacity-1 duration-300 translate-y-0' : 'scale-0 -translate-y-20 opacity-0 duration-150'}`}>
                        <div className="p-5 md:p-7 relative">
                            {/* button for closing the modal */}
                            <svg onClick={() => setOpenModal(false)} className="w-7 lg:w-10 absolute top-2 right-2 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000000"></path></g></svg>

                            {/* modal message here */}
                            <div className="max-h-[75vh] overflow-auto space-y-3 md:space-y-4 lg:space-y-5">
                                <Points points={message.fields} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* instruction modal ended */}


            {/* form with instruction button */}
            <div className="text-center">
                <p className="text-[15px] lg:text-base font-medium first-letter:text-xl first-letter:text-[#0C46C4] w-2/3 mx-auto">{message.instructions}</p>
                {/* button for opening the instruction modal */}
                <button onClick={() => setOpenModal(true)} className="text-lg font-medium font-open-sans text-[#0C46C4] flex items-center justify-center gap-1 mx-auto">Show Instructions <img src={info} className="w-[18px]" /></button>

                {/* form to add homework */}
                <form
                    className="w-3/4 md:w-2/3 lg:w-[47%] border-t-8 mx-auto my-5 rounded-xl z-0 space-y-5"
                    onSubmit={handleFormSubmit}
                >
                    {/* top rounded border */}
                    <div className="w-full h-30 bg-[#0C46C4] rounded-t-2xl"></div>

                    {/* all the classes here */}
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

                    {/* choose subject of the homework */}
                    <SelectField
                        id={'homework-subject'}
                        name={'homework-subject'}
                        nameText={'Subject'}
                        optionName={currentSubjectShowingName}
                        placeholder={`ex: Physics`}
                        selectPadding={7}
                        borderColor={'border-[#0C46C4A7]'}
                        borderColorOnFocus={'focus-within:border-[#0C46C4]'}
                        selectedValue={currentSubject}
                        customAtts={{ disabled: currentSubjects.length === 0 }}
                        handlerOnSelect={handleSubjectChange}
                        errorMessage={subjectError}
                        borderFull
                        isRequired
                    >
                        {
                            currentSubjects.map(subject => {
                                if (subject.parts > 1) {
                                    let subjectOptions = [];
                                    for (let i = 1; i <= subject.parts; i++) {
                                        subjectOptions.push(
                                            <Option
                                                key={`${subject.name}-${i}`}
                                                optionName={`${subject.name} - Paper ${i}`}
                                                optionValue={`${subject.name}-${i}`}
                                            />
                                        );
                                    }
                                    return subjectOptions;
                                } else {
                                    return <Option
                                        key={`${subject.name}`}
                                        optionName={subject.name}
                                        optionValue={subject.name}
                                    />
                                }
                            })
                        }
                    </SelectField>



                    {/* type the title of the homework */}
                    <InputField
                        type={'text'}
                        nameText={'Title'}
                        id={'homeworkTitle'}
                        name={'homework-title'}
                        placeholder={'ex: Physics - Chapter 12'}
                        inputPadding={7}
                        borderColor={'border-[#0C46C4A7]'}
                        borderColorOnFocus={'focus-within:border-[#0C46C4]'}
                        borderFull
                        isRequired
                    />

                    {/* textarea field */}
                    <TextAreaField
                        nameText={'Homework'}
                        id={'homeworkText'}
                        name={'homework-text'}
                        placeholder={`# Solve the following algebraic equations:
                        ● 2x + 5 = 15
                        ● 3y - 7 = 16
# Draw a graph for the equation: y = 2x + 3`}
                        rows={7}
                        inputPadding={7}
                        borderColor={'border-[#0C46C4A7]'}
                        borderColorOnFocus={'focus-within:border-[#0C46C4]'}
                        borderFull
                        isRequired
                    />

                    {/* due date for homework */}
                    <InputField
                        type={'date'}
                        nameText={'Due Date'}
                        id={'dueDate'}
                        name={'dueDAte'}
                        placeholder={'ex: 22/03/2024'}
                        inputPadding={7}
                        borderColor={'border-[#0C46C4A7]'}
                        borderColorOnFocus={'focus-within:border-[#0C46C4]'}
                        errorMessage={dueDateError}
                        borderFull
                        isRequired
                    />

                    {/* caution message here */}
                    <p className="text-xs lg:text-sm mt-9 flex items-center justify-center"><img src={warning} className="w-[18px] lg:w-[20px]" />{message.final_note}</p>

                    {/* submit button here */}
                    <Button type={'submit'} name={'addStudent'} nameText={'Add Homework'} customStyle={'mb-12 mt-3'} paddingY={'py-2'} initialTranslateY={100} />
                </form>
                {/* ended form to add homework */}

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
            </div>
        </div>
    );
};

export default Homework;