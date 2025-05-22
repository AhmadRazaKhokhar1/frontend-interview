import { CgClose } from "react-icons/cg";
import type { ISecondaryChild, ISecondaryRoute } from "../../../../../utils";

interface SecondaryRoutesPanelProps {
  activeSecondaryRoute: ISecondaryRoute;
  onCloseDialog: () => void;
}

export default function SecondaryRoutesPanel({
  activeSecondaryRoute,
  onCloseDialog,
}: SecondaryRoutesPanelProps) {
  return (
    <div
      onBlur={onCloseDialog}
      className="p-2 bg-transparent w-[30%] mx-[30%] mt-32 absolute  z-50"
    >
      <div className="w-full bg-white dark:bg-[#001339] shadow-2xl overflow-hidden rounded-lg max-h-[80vh] md:max-h-[70vh] p-5">
        <div className="bg-[#ffffff5e] rounded-full w-6 h-6 flex items-center justify-center absolute right-">
          <CgClose
            color="red"
            onClick={onCloseDialog}
            className="cursor-pointer"
          />
        </div>
        <h3 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-white">
          {activeSecondaryRoute.title}
        </h3>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {activeSecondaryRoute.children.map(
            (child: ISecondaryChild, index: number) => (
              <a
                key={`${activeSecondaryRoute.title}_child_${index}`}
                href={child.url}
                onClick={onCloseDialog}
                className="text-sm font-medium px-4 py-3 rounded-md cursor-pointer transition-all
                         text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                {child.title}
              </a>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
