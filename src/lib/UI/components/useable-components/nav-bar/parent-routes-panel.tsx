// MUI
import { Dialog, useMediaQuery, useTheme } from "@mui/material";

// Utils
import { CgClose } from "react-icons/cg";
import type { IParentRoutesPanel } from "../../../../../utils";


export default function ParentRoutesPanel({
  setSelectedChildTitle,
  activeChildObject,
  activeParentRoute,
  selectedChildTitle,
  setSelectedParentTitle,
}: IParentRoutesPanel) {
  const theme = useTheme();
  //
  
  const isStackedLayout = useMediaQuery(theme.breakpoints.down("md"));

  const handleDialogClose = () => {
    setSelectedParentTitle("");
    setSelectedChildTitle("");
  };

  if (!activeParentRoute) {
    return null; 
  }

  return (
    <Dialog
      key={activeParentRoute.parentTitle} 
      open={!!activeParentRoute}
      onClose={handleDialogClose}
      fullScreen={isStackedLayout} 
      aria-describedby="alert-dialog-slide-description"
      slotProps={{
        backdrop: {
          sx: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "transparent", 
          boxShadow: "none", 
          overflowY: "unset", 
          
          ...(!isStackedLayout && {
            position: "absolute", 
            top: "calc(var(--header-height, 70px) + 30px)", 
            
            
            
            width: "clamp(300px, 70vw, 1200px)", 
            maxWidth: "1200px", 
            margin: "0 auto", 
          }),
        },
      }}
      
    >
      <div
        className={`
          flex w-full bg-white dark:bg-[#001339] shadow-2xl rounded-lg p-5
          overflow-hidden 
          ${isStackedLayout ? "flex-col h-full" : "max-h-[calc(100vh-var(--header-height,70px)-60px)]"}
          `}
      >

          <div className="bg-[#ffffff5e] rounded-full w-6 h-6 flex items-center justify-center absolute right-">
                  <CgClose
                    color="red"
                    onClick={handleDialogClose}
                    className="cursor-pointer"
                  />
                </div>
        <div
          className={`
            p-3 sm:p-4 md:p-5 flex flex-col gap-2 overflow-y-auto
            w-full md:w-[40%] lg:w-[30%] /* Full width on stacked, specific on larger */
            border-b md:border-b-0 md:border-r border-gray-200 dark:border-zinc-700
            ${isStackedLayout ? "max-h-[40vh] shrink-0" : ""} /* Max height and prevent shrinking on stacked */
          `}
        >

          {!isStackedLayout && (
             <h3 className="text-base lg:text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2 lg:mb-3 px-1">
                {activeParentRoute.parentTitle}
            </h3>
          )}
          {activeParentRoute.children?.map((child, childIndex) => (
            <div
              key={`child_${activeParentRoute.parentTitle}_${childIndex}`}
              onClick={() => setSelectedChildTitle(child.title)}
              className={`text-sm font-medium px-3 py-2 lg:px-4 rounded-md cursor-pointer transition-all ${
                selectedChildTitle === child.title
                  ? "bg-zinc-100 dark:bg-zinc-700 text-blue-600 dark:text-white"
                  : "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              }`}
            >
              {child.title}
            </div>
          ))}
        </div>
        <div
          className={`
            flex-1 p-3 sm:p-4 md:p-5 flex flex-wrap items-start content-start gap-2 md:gap-3 lg:gap-4 overflow-y-auto
            ${isStackedLayout && !activeChildObject ? "hidden" : ""} /* Hide if no child selected on stacked */
          `}
        >
          {activeChildObject?.sub_titles?.map((subChild, subChildIndex) => (
            <div
              key={`sub_child_${activeParentRoute.parentTitle}_${selectedChildTitle}_${subChildIndex}`}
              className="text-xs sm:text-sm px-3 py-2 lg:px-4 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 
                         transition-all cursor-pointer min-w-[100px] sm:min-w-[120px] md:min-w-[140px] 
                         text-center text-zinc-800 dark:text-white break-words" 
              onClick={() => {
                
                handleDialogClose(); 
              }}
            >
              {subChild.title}
            </div>
          ))}
          {(!activeChildObject || (activeChildObject && activeChildObject.sub_titles.length === 0)) && (
             <div className="w-full text-center text-sm text-zinc-500 dark:text-zinc-400 py-10 px-2">
                {selectedChildTitle ? "No further details for this selection." : "Select an item from the list to see more options."}
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}