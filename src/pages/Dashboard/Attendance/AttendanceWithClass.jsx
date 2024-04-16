import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Checkbox from "../../../components/FormComponents/Checkbox/Checkbox";
import edit from '../../../assets/web-fonts/edit.svg';
import save from '../../../assets/web-fonts/save.svg';

const AttendanceWithClass = () => {
    const { classId } = useParams();
    const [attendanceInfo, setAttendanceInfo] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editInfo, setEditInfo] = useState({});
    const [openModal, setOpenModal] = useState(!false);

    const handleCheckboxChange = (id) => {
        const studentId = `student_${id}`;
        if (editInfo[studentId]) {
            const { [studentId]: studentDefault, ...rest } = editInfo;
            setEditInfo(rest);
            console.log('edit: ' + !studentDefault)
        } else {
            setEditInfo({
                ...editInfo,
                [studentId]: true,
            });
        }
    }

    const handleEditOrSave = () => {
        if (editMode) {
            // write code to save edits
            if(editInfo.length > 0) console.log(editInfo);
            // console.log(editInfo);
            setEditInfo({});
        }
        setEditMode(!editMode)
    }

    useEffect(() => {
        if (['6', '7', '8', '9', '10'].includes(classId)) {
            fetch('/dashboard/Attendance/attendance.json')
                .then(res => res.json())
                .then(data => {
                    const classInfo = data[`class_${classId}`];
                    // sorting the students according to their roll number in ascending order
                    classInfo.sort((student_1, student_2) => student_1.rollNumber - student_2.rollNumber);
                    setAttendanceInfo(classInfo);
                    // console.log(classInfo)
                })
                .catch(console.error)
        }
    }, [])
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
                        <h3 className="text-white font-medium">Present</h3>
                    </div>

                    {/* list of the students */}
                    {
                        attendanceInfo.map(student => <div key={student.id} className="w-full">
                            <div
                                className="w-full px-2 py-2 hover:bg-[gray]/35 flex justify-between items-center gap-7"
                            >
                                <Link
                                    to={`/student/${student.userId}`}
                                    className="font-medium text-[black]/90"
                                >
                                    {student.name} {student.rollNumber}
                                </Link>
                                <Checkbox
                                    onChange={() => handleCheckboxChange(student.id)}
                                    defaultChecked={editInfo[`student_${student.id}`] === true ? !student.present : student.present}
                                    showCross={!false}
                                    disabled={!editMode}
                                />
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* save edits modal */}
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
                                <p>Save Edits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceWithClass;