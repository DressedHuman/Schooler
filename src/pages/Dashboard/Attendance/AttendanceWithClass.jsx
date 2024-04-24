import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Checkbox from "../../../components/FormComponents/Checkbox/Checkbox";
import edit from '../../../assets/web-fonts/edit.svg';
import save from '../../../assets/web-fonts/save.svg';

const AttendanceWithClass = () => {
    const { classId } = useParams();
    const [currentAttendanceInfo, setCurrentAttendanceInfo] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editInfo, setEditInfo] = useState({});
    const [openModal, setOpenModal] = useState(false);


    const handleCheckboxChange = (userId) => {
        if (editInfo[userId]) {
            // eslint-disable-next-line no-unused-vars
            const { [userId]: _, ...rest } = editInfo;
            setEditInfo(rest);
        } else {
            setEditInfo({
                ...editInfo,
                [userId]: true,
            });
        }
    }

    const handleCancelSave = () => {
        // write code to reset the changes
        // 
        // 
        setOpenModal(false);
    }

    const handleSaveOk = () => {
        // write code to effectively save the changes in the server
        // 
        // 
        setEditMode(false);
        setOpenModal(false);
        handleUpdateAttendanceState();
    }

    const handleUpdateAttendanceState = () => {
        // console.log(currentAttendanceInfo);
        const updatedAttendanceInfo = currentAttendanceInfo.map(student => {
            if(editInfo[student.userId]){
                return {...student, present: !student.present}
            }
            return student;
        })
        setCurrentAttendanceInfo(updatedAttendanceInfo);
        setEditInfo({});
    }

    const handleEditOrSave = () => {
        if (editMode) {
            // write code to save edits
            if (Object.keys(editInfo).length) {
                setOpenModal(true);
                // console.log(editInfo);

                // setting the width of the modal attendance state divs for responsive design
                const elemsInfo = [
                    {
                        title: 'prev_state_title',
                        box: 'prev_state_checkbox',
                    },
                    {
                        title: 'now_state_title',
                        box: 'now_state_checkbox',
                    }
                ]

                elemsInfo.forEach(elemInfo => {
                    const titleElemWidth = document.getElementById(elemInfo.title).offsetWidth;
                    const boxElems = document.getElementsByClassName(elemInfo.box);
                    Array.from(boxElems).forEach(box => {
                        box.style.width = `${titleElemWidth}px`;
                    })
                })
            } else {
                setEditMode(false);
                setOpenModal(false);
            }
        } else {
            setEditMode(true);
        }
    }

    useEffect(() => {
        if (['6', '7', '8', '9', '10'].includes(classId)) {
            fetch('/dashboard/Attendance/attendance.json')
                .then(res => res.json())
                .then(data => {
                    const classInfo = data[`class_${classId}`];
                    // sorting the students according to their roll number in ascending order
                    classInfo.sort((student_1, student_2) => student_1.rollNumber - student_2.rollNumber);
                    setCurrentAttendanceInfo(classInfo);
                    // console.log(classInfo)

                    return data;
                })
                .catch(console.error)
        }
    }, [])

    // another useEffect hook for updating the width of each checkbox container with the width of the title
    useEffect(() => {
        const adjustWidth = () => {
            const checkbox_title_width = document.querySelector('#attendance_state_title').offsetWidth;
            const checkbox_divs = document.querySelectorAll('.attendance_state_checkbox');
            Array.from(checkbox_divs).forEach(checkbox_div => checkbox_div.style.width = `${checkbox_title_width}px`);
        }

        adjustWidth();
    }, [currentAttendanceInfo])

    
    return (
        <div>
            <div
                className={`w-full bg-[#0C46C4BF] flex justify-center items-center mb-7`}
            >
                <div className="w-3/4 md:w-2/3 lg:w-[47%] flex justify-between items-center">
                    <h2 className="text-base md:text-lg text-white font-semibold">Class :  <span className="font-normal">{classId}</span></h2>
                    <h2 className="text-base md:text-lg text-white font-semibold">Date :  <span className="font-normal">{new Date().toLocaleDateString()}</span></h2>
                </div>
            </div>

            {/* main body of the attendance list */}
            <div className="w-3/4 md:w-2/3 lg:w-[47%] mx-auto pb-[100px] relative">
                {/* edit or save button */}
                <button
                    className={`${editMode ? 'bg-[#5B58AD] text-white' : 'bg-transparent text-[#5B58AD]'} w-[107px] border-[#5B58AD] border-[3px] rounded-lg px-3 py-2 font-medium absolute bottom-0 right-[50%] translate-x-[50%]`}
                    onClick={handleEditOrSave}
                >
                    {
                        editMode ?
                            <span className="flex justify-between items-center">
                                <img src={save} className="w-[25px]" />
                                <span className="text-xl">Save</span>
                            </span> :
                            <span className="flex justify-between items-center">
                                <img src={edit} className="w-[25px]" />
                                <span className="text-xl">Edit</span>
                            </span>
                    }
                </button>

                {/* attendance list */}
                <div className="w-full flex flex-col items-center">
                    {/* header of the list */}
                    <div
                        className="w-full px-2 pt-2 pb-3 mb-3 bg-[#0C46C4BF] flex justify-between items-center gap-7"
                    >
                        <h2 className="text-white font-medium">Student Name</h2>
                        <h3 id="attendance_state_title" className="text-white font-medium">Present</h3>
                    </div>

                    {/* list of the students */}
                    {
                        currentAttendanceInfo.map(student => <div key={student.id} className="w-full">
                            <div
                                className="w-full px-2 py-2 hover:bg-[gray]/35 flex justify-between items-center gap-7"
                            >
                                <Link
                                    to={`/student/${student.userId}`}
                                    className={`font-medium ${editInfo[student.userId] ? 'text-error' : 'text-[black]/90'}`}
                                >
                                    {student.rollNumber} {student.name}
                                </Link>
                                <div className="attendance_state_checkbox flex justify-center items-center">
                                    <Checkbox
                                        onChange={() => handleCheckboxChange(student.userId)}
                                        defaultChecked={editInfo[student.userId] ? !student.present : student.present}
                                        showCross={!false}
                                        disabled={!editMode}
                                    />
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* save edits modal */}
            <div className="w-[75vw] md:w-72 mx-auto flex items-center justify-center font-open-sans">
                {/* clicking outside the modal message will also close the modal */}
                {/* div with full window overlay */}
                <div
                    className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-[black]/75 duration-100`}
                >
                    {/* main modal here */}
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-[87vw] md:w-[500px] lg:w-[750px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-100 opacity-1 duration-300 translate-y-0' : 'scale-0 -translate-y-20 opacity-0 duration-150'}`}>
                        <div className="p-5 md:p-7 relative">
                            {/* modal message here */}
                            <div className="max-h-[75vh] overflow-auto space-y-3 md:space-y-4 lg:space-y-5">
                                <p className="text-lg text-black font-medium">Are you sure to save the following changes?</p>
                                <div>
                                    {/* header of the list */}
                                    <div
                                        className="w-full px-2 pt-2 pb-3 mb-3 bg-[#0C46C4BF] flex justify-between items-center gap-7"
                                    >
                                        <h2 className="text-white font-medium">Student Name</h2>
                                        <div className="flex justify-center items-center gap-3 lg:gap-7">
                                            <h3 id="prev_state_title" className="text-white font-medium">Prev</h3>
                                            <h3 id="now_state_title" className="text-white font-medium">Now</h3>
                                        </div>
                                    </div>

                                    {/* list of the students whose attendance state have been changed */}
                                    {
                                        Object.keys(editInfo).map(userId => {
                                            const student = currentAttendanceInfo.find(student => student.userId == userId);

                                            return <div key={student.userId} className="w-full">
                                                <div
                                                    className="w-full px-2 py-2 hover:bg-[gray]/35 flex justify-between items-center gap-7"
                                                >
                                                    <p
                                                        className="font-medium text-[black]/90"
                                                    >
                                                        {student.rollNumber} {student.name}
                                                    </p>
                                                    <div className="flex justify-center items-center gap-3 lg:gap-7">
                                                        <div
                                                            className="prev_state_checkbox flex justify-center items-center"
                                                        >
                                                            <Checkbox
                                                                onChange={() => handleCheckboxChange(student.id)}
                                                                defaultChecked={student.present}
                                                                showCross={!false}
                                                                disabled={true}
                                                            />
                                                        </div>
                                                        <div
                                                            className="now_state_checkbox flex justify-center items-center"
                                                        >
                                                            <Checkbox
                                                                onChange={() => handleCheckboxChange(student.id)}
                                                                defaultChecked={!student.present}
                                                                showCross={!false}
                                                                disabled={true}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>

                                <div className="flex justify-center items-center gap-5 text-lg mt-7">
                                    {/* cancel button */}
                                    <button
                                        onClick={handleCancelSave}
                                        className="w-[75px] px-2 py-2 rounded-lg bg-orange-600 text-white  font-medium"
                                    >
                                        No
                                    </button>

                                    {/* okay button */}
                                    <button
                                        onClick={handleSaveOk}
                                        className="w-[75px] px-2 py-2 rounded-lg bg-[#0C46C4BF] text-white font-medium"
                                    >
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceWithClass;