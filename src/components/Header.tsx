const Header: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-[#2c56d4] to-[#0c2684] py-2 flex justify-center items-center flex-col gap-0">
      <p className="text-white text-lg md:text-xl lg:text-2xl font-bold">
        নাউতারা আবিউন্নেছা দ্বি-মূখী উচ্চ বিদ্যালয়
      </p>
      <div className="flex justify-center items-center gap-2 text-white text-base md:text-lg lg:text-xl font-medium">
        <p>ডিমলা, নীলফামারী</p>
        <p className="text-[black]">|</p>
        <p>স্থাপিত: ১৯১১</p>
      </div>
    </div>
  );
};

export default Header;
