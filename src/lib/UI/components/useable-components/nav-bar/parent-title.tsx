// Icons
import { FiChevronDown } from "react-icons/fi";

// Utils
import {
  baseStyle,
  hoverStyle,
  textStyle,
  titleColorMap,
  type ParentTitleProps,
} from "../../../../../utils";

export default function ParentTitle({
  route,
  handleParentClick,
  isActive,
}: ParentTitleProps) {
  // Constants
  const activeStateStyle = isActive
    ? "bg-gray-700 text-white dark:bg-blue-700"
    : "";
  const titleColor =
    titleColorMap[route?.parentTitle] || "text-zinc-300 dark:text-zinc-200";
  return (
    <div className="group">
      <div
        className={`${baseStyle} ${titleColor} ${textStyle} ${
          isActive ? activeStateStyle : hoverStyle
        }`}
        onClick={() => handleParentClick(route)}
      >
        {route.parentTitle}
        <FiChevronDown
          className={`ml-1 transition-transform duration-200 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}
