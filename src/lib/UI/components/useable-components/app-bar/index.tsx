import { FaComments, FaGlobe, FaPhoneAlt, FaSearch, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Appbar() {
  return (
    <div className="w-full h-12 bg-blue-800 text-white flex justify-between items-center px-4 md:px-10 border-t-4 border-purple-500">
      {/* Left Icons */}
      <div className="flex items-center gap-4">
        <FaSearch className="text-lg" />
        <FaPhoneAlt className="text-lg" />
        <div className="flex items-center gap-1">
          <FaGlobe className="text-lg" />
          <IoMdArrowDropdown className="text-sm" />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 text-orange-400">
        <FaComments className="text-lg" />
        <FaUser className="text-lg" />
      </div>
    </div>
  );
}

