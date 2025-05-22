import { HomeHeroSection, SolutionCards } from "../../components";



const HomePage = () => {
  return (
    <div className=" text-white min-h-screen font-sans">
      {/* Hero Section */}
     <HomeHeroSection/>

      {/* Solutions Cards */}
      <SolutionCards/>
    </div>
  );
};

export default HomePage;
