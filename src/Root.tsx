import Header from "./components/Header";
import Home from "./pages/Home/Home";

const Root: React.FC = () => {
  return (
    <div className="bg-[#dddeee] w-full h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
};

export default Root;
