import { useLoaderData } from "react-router-dom";
import RectHeader from "../../../components/shared/RectHeader/RectHeader";
import homeworkWhiteLogo from '/dashboard/whiteVersions/HomeworkWhite.png';
import Points from "../../../components/shared/Points/Points";
import { useContext, useEffect, useState } from "react";
import InputField from "../../../components/FormComponents/inputField";
import SelectField from "../../../components/FormComponents/DropDownMenu/Select";
import Button from "../../../components/FormComponents/Button";

// importing svg icons
import warning from '/warning.svg';
import info from '/information.svg';
import axios from "axios";
import RadioGroup from "../../../components/FormComponents/RadioSelector/RadioGroup";
// import { AuthContext } from "../../../providers/AuthProvider";

const Homework = () => {
    const message = useLoaderData().data;
    const [openModal, setOpenModal] = useState(false);
    /* this method of getting classes, groups and subjects data on authContext is deprecated
        instead encouraged to isolate these data on database as CRUD operations may need to run to keep these vital data up to date

    const { classes, groups, subjects } = useContext(AuthContext); //collecting classes, groups and subjects from the authContext
    */
    const [classes, setClasses] = useState([]);
    const [groups, setGroups] = useState({});
    const [subjects, setSubjects] = useState([]);


    // states for showing information
    const [hasGroups, setHasGroups] = useState(false); //boolean whether a class has groups or not
    const [showingGroups, setShowingGroups] = useState([]); //set showing groups, primarily for class six
    const [showingSubjects, setShowingSubjects] = useState([]);

    // --------------------------------------------------------------------------

    // handle groups or subjects for classes when class is changed
    const handleClassChange = e => {
        const currentClass = e.target.value;
        const _hasGroups = groups[currentClass].hasGroups;
        const _showingGroups = groups[currentClass].groups;
        setHasGroups(_hasGroups);
        setShowingGroups(_showingGroups);
    }


    // handle subjects for groups when group is changed
    const handleGroupChange = e => {
        const group = e.target.value;
        const _showingSubjects = subjects.filter(subject => subject.groups.includes(group));
        setShowingSubjects(_showingSubjects);
    }


    // handler function for form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        // getting classes
        axios.get('http://localhost:8000/api/classes')
            .then(res => setClasses(res.data))
            .catch(console.error);

        // getting groups
        /* axios.get('http://localhost:8000/api/groups')
            .then(res => setGroups(res.data))
            .catch(console.error); */

        // getting subjects
        axios.get('http://localhost:8000/api/subjects')
            .then(res => {
                setSubjects(res.data);
                const _classSubjects = res.data.filter(sub => sub.classes.includes(6));
                setShowingSubjects(_classSubjects);
            })
            .catch(console.error);

        // setting showingSubjects for classes with no groups/ None group
        hasGroups || setShowingSubjects(subjects.filter(subject => subject.groups.includes('None')));
    }, [hasGroups])

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
                    className="w-3/4 md:w-2/3 lg:w-1/3 mx-auto z-0"
                    onClick={handleFormSubmit}
                >
                    {/* choose the class for the homework */}
                    {/* <SelectField
                        id={'homework-class'}
                        name={'homework-class'}
                        nameText={'Class'}
                        placeholder={`ex: 7`}
                        selectPadding={7}
                        borderFull
                        borderColor={'border-[#0C46C4A7]'}
                        borderColorOnFocus={'focus-within:border-[#0C46C4]'}
                        defaultValue={6}
                        isRequired
                        customAtts={{ onChange: handleClassChange }}
                    >
                        {
                            classes.map(cls => <option
                                key={cls}
                                value={cls}
                            >
                                {cls}
                            </option>)
                        }
                    </SelectField> */}
                    <RadioGroup idProperty={'name'} nameProperty={'name'} nameTextProperty={'name'} valueProperty={'value'} radioOptions={classes} />

                    {
                        hasGroups && <SelectField
                            id={'homework-groups'}
                            name={'homework-groups'}
                            nameText={'Groups'}
                            placeholder={`ex: 7`}
                            selectPadding={7}
                            borderFull
                            borderColor={'border-[#0C46C4A7]'}
                            borderColorOnFocus={'focus-within:border-[#0C46C4]'}
                            defaultValue={6}
                            isRequired
                            customAtts={{ onChange: handleGroupChange }}
                        >
                            {
                                showingGroups.map((group, index) => <option
                                    key={index}
                                    value={group}
                                >
                                    {group}
                                </option>)
                            }
                        </SelectField>
                    }

                    {/* choose subject of the homework */}
                    <SelectField
                        id={'homework-subject'}
                        name={'homework-subject'}
                        nameText={'Subject'}
                        placeholder={`ex: Physics`}
                        selectPadding={7}
                        borderFull
                        borderColor={'border-[#0C46C4A7]'}
                        borderColorOnFocus={'focus-within:border-[#0C46C4]'}
                        defaultValue={'Bangla-1'}
                        isRequired
                    >
                        {
                            showingSubjects.map(subject => {
                                if (subject.parts > 1) {
                                    let subjectOptions = [];
                                    for (let i = 0; i < subject.parts; i++) {
                                        subjectOptions.push(
                                            <option
                                                key={`${subject.name}-${i + 1}`}
                                                value={`${subject.name}-${i + 1}`}
                                            >
                                                {`${subject.name} - Paper ${i + 1}`}
                                            </option>
                                        );
                                    }
                                    return subjectOptions;
                                } else {
                                    return <option key={`${subject.name}`} value={`${subject.name}`}>{`${subject.name}`}</option>;
                                }
                            })
                        }
                    </SelectField>



                    {/* type the title of the homework */}
                    <InputField type={'text'} nameText={'Title'} id={'homework-title'} name={'homework-title'} placeholder={'ex: Physics - Chapter 12'} inputPadding={7} borderFull borderColor={'border-[#0C46C4A7]'} borderColorOnFocus={'focus-within:border-[#0C46C4]'} isRequired />

                    {/* caution message here */}
                    <p className="text-xs lg:text-sm mt-9 flex items-center justify-center"><img src={warning} className="w-[18px] lg:w-[20px]" />{message.final_note}</p>

                    {/* submit button here */}
                    <Button type={'submit'} name={'addStudent'} nameText={'Add Homework'} customStyle={'mb-12 mt-3'} paddingY={'py-2'} initialTranslateY={100} />
                </form>
                {/* ended form to add homework */}
            </div>
        </div>
    );
};

export default Homework;