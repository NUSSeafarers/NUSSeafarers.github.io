import HeroImage from "../components/HeroImage";
import MainContent from "../components/MainContent";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="m-4">
      <HeroImage />
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-12">
        {/* Main Section */}
        <div>
					<MainContent /> 
        </div>

        {/* Sidebar */}
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
