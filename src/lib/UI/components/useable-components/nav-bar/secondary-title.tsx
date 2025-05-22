// Icons
import { FiChevronDown } from "react-icons/fi";

// Utils
import {
    baseStyle,
    hoverStyle,
    titleColorMap,
    type SecondaryTitleProps,
} from "../../../../../utils";

export default function SecondaryTitle({
  route,
  onClick,
  isActive,
}: SecondaryTitleProps) {
  // Constants
  const activeStateStyle = isActive
    ? "bg-gray-700 text-white dark:bg-blue-700"
    : "";
  const titleColor =
    titleColorMap[route.title] || "text-zinc-300 dark:text-zinc-200";
  return (
    <div
      className={`${baseStyle} ${
        isActive ? activeStateStyle : `${titleColor} ${hoverStyle}`
      }`}
      onClick={onClick}
    >
      {route.title}
      <FiChevronDown
        className={`ml-1 transition-transform duration-200 ${
          isActive ? "rotate-180" : ""
        }`}
      />
    </div>
  );
}
