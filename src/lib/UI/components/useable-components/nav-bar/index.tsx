// Hooks
import { useState } from "react";

// Icons
import { FiMenu } from "react-icons/fi";

// Components
import AppLogo from "../app-logo";
import ParentRoutesPanel from "./parent-routes-panel";
import ParentTitle from "./parent-title";
import SecondaryRoutesPanel from "./secondary-routes.panel";
import SecondaryTitle from "./secondary-title";

// Utils
import { CgClose } from "react-icons/cg";
import {
  demo_routes1,
  demo_routes2,
  type IChildRoute,
  type IParentRoute,
  type ISecondaryRoute,
} from "../../../../../utils";

export default function NavBar() {
  // States
  const [selectedParentTitle, setSelectedParentTitle] = useState<string>("");
  const [selectedChildTitle, setSelectedChildTitle] = useState<string>("");
  const [selectedSecondaryTitle, setSelectedSecondaryTitle] =
    useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active panels
  const activeParentRoute = demo_routes1.find(
    (route) => route.parentTitle === selectedParentTitle,
  );
  const activeChildObject = activeParentRoute?.children.find(
    (child) => child.title === selectedChildTitle,
  );

  const activeSecondaryRoute = demo_routes2.find(
    (route) => route.title === selectedSecondaryTitle,
  );

  // Handlers
  const handleParentClick = (route: IParentRoute) => {
    if (selectedSecondaryTitle) setSelectedSecondaryTitle("");

    if (selectedParentTitle === route.parentTitle) {
      setSelectedParentTitle("");
      setSelectedChildTitle("");
    } else {
      setSelectedParentTitle(route.parentTitle);
      if (route.children && route.children.length > 0) {
        setSelectedChildTitle(route.children[0].title);
      } else {
        setSelectedChildTitle("");
      }
    }
  };

  const closeParentDialog = () => {
    setSelectedParentTitle("");
    setSelectedChildTitle("");
  };

  const handleSecondaryTitleClick = (routeTitle: string) => {
    if (selectedParentTitle) closeParentDialog();

    if (selectedSecondaryTitle === routeTitle) {
      setSelectedSecondaryTitle("");
    } else {
      setSelectedSecondaryTitle(routeTitle);
    }
  };
  const closeSecondaryDialog = () => {
    setSelectedSecondaryTitle("");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex flex-col w-full bg-transparent relative">
      <div className="bg-transparent text-white py-4 px-6 flex items-center justify-between">
        <AppLogo />
        <div className="hidden lg:flex items-start space-x-3">
          {demo_routes1.map((route) => (
            <ParentTitle
              key={`parent_title_${route.parentTitle}`} //
              route={route as IParentRoute}
              parentIndex={0}
              handleParentClick={handleParentClick}
              isActive={selectedParentTitle === route.parentTitle}
            />
          ))}
        </div>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none z-20" /* Ensure button is clickable */
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
      {activeParentRoute && (
        <ParentRoutesPanel
          activeParentRoute={activeParentRoute as IParentRoute}
          selectedChildTitle={selectedChildTitle}
          activeChildObject={activeChildObject as IChildRoute | undefined}
          setSelectedChildTitle={setSelectedChildTitle}
          selectedParentTitle={selectedParentTitle}
          setSelectedParentTitle={setSelectedParentTitle}
        />
      )}
      <div className="border-t border-blue-800 py-2 px-6 hidden lg:flex items-center justify-center space-x-3">
        {demo_routes2.map((route) => (
          <SecondaryTitle
            key={`secondary_title_${route.title}`}
            route={route as ISecondaryRoute}
            onClick={() => handleSecondaryTitleClick(route.title)}
            isActive={selectedSecondaryTitle === route.title}
          />
        ))}
      </div>

      {activeSecondaryRoute && (
        <SecondaryRoutesPanel
          activeSecondaryRoute={activeSecondaryRoute as ISecondaryRoute}
          onCloseDialog={closeSecondaryDialog}
        />
      )}
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#000c24] dark:bg-[#001339] text-white fixed inset-0 z-50 pt-20">
          <div className="px-4 py-2 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            <p className="text-xs text-gray-400 uppercase px-3 pt-2 pb-1 tracking-wider">
              Menu
            </p>
            {demo_routes1.map((route) => (
              <div
                key={`mobile_parent_${route.parentTitle}`}
                className="py-3 px-3 hover:bg-blue-700 rounded cursor-pointer font-medium"
                onClick={() => {
                  handleParentClick(route as IParentRoute);
                }}
              >
                {route.parentTitle}
              </div>
            ))}
            <hr className="border-gray-700 my-3" />
            <p className="text-xs text-gray-400 uppercase px-3 pt-2 pb-1 tracking-wider">
              Products & Services
            </p>
            {demo_routes2.map((route) => (
              <div
                key={`mobile_secondary_${route.title}`}
                className="py-3 px-3 hover:bg-blue-700 rounded cursor-pointer font-medium"
                onClick={() => {
                  handleSecondaryTitleClick(route.title);
                }}
              >
                {route.title}
              </div>
            ))}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 text-white text-2xl"
            >
              <CgClose color="red"/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
