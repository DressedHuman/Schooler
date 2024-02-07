import { useLoaderData } from "react-router-dom";
import RectHeader from "../../../components/shared/RectHeader/RectHeader";
import homeworkWhiteLogo from '/dashboard/whiteVersions/HomeworkWhite.png';
import Points from "../../../components/shared/Points/Points";
import { useState } from "react";

const Homework = () => {
    const message = useLoaderData().data;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            {/* header with rectangular background and a icon with title */}
            <RectHeader backgroundColor={'bg-[#0C46C4]'} icon={homeworkWhiteLogo} iconWidth={'w-[50px] md:w-[75px]'} iconHeight={'h-[50px] md:h-[75px]'} title={'HOMEWORK'} textColor={'white'} flexPosition={'items-center'} containerPadding={'pl-16 md:pl-[88px] lg:pl-28'} />

            {/* instruction modal to add homework perfectly */}
            <button onClick={() => setOpenModal(true)} className="text-lg font-medium font-open-sans">Show Instructions</button>
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
                                <p className="text-[15px] lg:text-base font-medium first-letter:text-xl first-letter:text-[#0C46C4]">{message.instructions}</p>
                                <Points points={message.fields} />
                                <p className="text-[15px] lg:text-base font-medium">{message.final_note}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* instruction modal ended */}
        </div>
    );
};

export default Homework;