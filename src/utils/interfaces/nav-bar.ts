interface ISubTitle {
  title: string;
  URL: string;
}

interface IChildRoute {
  title: string;
  url: string;
  sub_titles: ISubTitle[];
}

interface IParentRoute {
  parentTitle: string;
  parentUrl: string;
  children: IChildRoute[];
}

interface IParentRoutesPanel {
  setSelectedChildTitle: (title: string) => void;
  selectedChildTitle: string;
  selectedParentTitle: string;
  activeChildObject:
    | {
        sub_titles: { title: string }[];
      }
    | undefined;
  activeParentRoute:
    | {
        parentTitle: string;
        children: { title: string }[];
      }
    | undefined;
  setSelectedParentTitle: (title: string) => void;
}

// For demo_routes2
interface ISecondaryChild {
  title: string;
  url: string;
}

interface ISecondaryRoute {
  title: string;
  url: string; // This is the parent's URL, often "/"
  children: ISecondaryChild[];
}
interface SecondaryTitleProps {
  route: ISecondaryRoute;
  onClick: () => void;
  isActive: boolean;
}
interface ParentTitleProps {
    route: IParentRoute;
    parentIndex: number; // Kept for potential unique keying if needed elsewhere, though route.parentTitle is better for keys
    handleParentClick: (route: IParentRoute) => void;
    isActive: boolean; // New prop
  }
export type {
    IChildRoute,
    IParentRoute,
    IParentRoutesPanel,
    ISecondaryChild,
    ISecondaryRoute,
    ISubTitle, ParentTitleProps, SecondaryTitleProps
};

