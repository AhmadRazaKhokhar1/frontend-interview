// Icons
import { IoArrowForward } from "react-icons/io5";

export default function HomeHeroSection() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
      {/* Left Text Section */}
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          IIGS exemplifies its dedication to sustainability through innovative
          procurement and supply chain practices that boost operational
          efficiency and drive industry-leading innovation
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          IIGS is committed to delivering high-quality products on time, every
          time.
        </p>
        <button className="bg-white text-black flex flex-row items-center justify-center font-semibold px-6 py-3 rounded cursor-pointer transition hover:shadow-[#ffffff6f] hover:shadow-lg hover:bg-[#b7b05b95] hover:text-white">
          <span>
            <p>BOOK A MEETING</p>
          </span>
          <IoArrowForward />
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full h-full">
        <img
          src="/src/assets/banner.png"
          alt="Robot holding globe"
          className="w-full h-full object-contain ml-32 -mb-32"
        />
      </div>
    </div>
  );
}
