import RectHeader from "../../../components/shared/RectHeader/RectHeader";
import homeworkWhiteLogo from '/dashboard/whiteVersions/HomeworkWhite.png';

const Homework = () => {
    return (
        <div>
            <RectHeader backgroundColor={'bg-[#0C46C4]'} icon={homeworkWhiteLogo} iconWidth={'w-[50px] md:w-[75px]'} iconHeight={'h-[50px] md:h-[75px]'} title={'HOMEWORK'} textColor={'white'} flexPosition={'items-center'} containerPadding={'pl-16 md:pl-[88px] lg:pl-28'} />
            <h2>Homework page here</h2>
        </div>
    );
};

export default Homework;