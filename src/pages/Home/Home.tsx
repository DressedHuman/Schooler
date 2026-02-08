import Notices from "../../components/Home/Notices";
import WhoLogins from "../../components/Home/WhoLogins";

const Home: React.FC = () => {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2">
      {/* latest notices */}
      <div className="flex justify-center items-center h-full">
        <Notices />
      </div>

      {/* choose login type */}
      <div className="flex justify-center items-center">
        <WhoLogins />
      </div>
    </div>
  );
};

export default Home;
