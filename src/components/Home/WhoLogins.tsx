interface ButtonProps {
  label: string;
  iconPath: string;
  onClick: () => void;
}

const Button = ({ label, iconPath, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className="bg-[#0c46c4] h-full aspect-square rounded-3xl p-8 flex justify-center items-center flex-col gap-0.5 cursor-pointer hover:scale-105 duration-75"
    >
      {/* teacher */}
      <img src={iconPath} alt={`icon of ${label}`} className="w-16" />
      <p className="text-white text-base md:text-lg lg:text-xl font-medium">
        {label}
      </p>
    </button>
  );
};

const WhoLogins: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-8">
      <p className="text-[black] text-lg md:text-xl lg:text-2xl font-semibold">
        আপনি কী হিসেবে লগইন করতে চান?
      </p>

      {/* login type buttons */}
      <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
        <Button
          label="Teacher"
          iconPath={"/teacher.svg"}
          onClick={() => console.log("clicked teacher")}
        />

        <Button
          label="Student"
          iconPath={"/student.svg"}
          onClick={() => console.log("clicked student")}
        />
      </div>
    </div>
  );
};

export default WhoLogins;
