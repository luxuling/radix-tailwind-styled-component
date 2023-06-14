import AccordionReact from "../components/accordion";
import AlertDialogReact from "../components/alertDialog";
import CheckBoxReact from "../components/checkbox";
import CollabsibleReact from "../components/collapsible";
import ContextMenuReact from "../components/contextMenu";
import ReactDialog from "../components/dialog";
import MenuBarReact from "../components/menuBar";
import TooltipReact from "../components/tooltip";

export default function useComponents() {
  const baseLink =
    "https://github.com/luxuling/radix-tailwind-styled-component/tree/main/src/components";

  const allComponents = [
    {
      name: "Tooltip",
      component: TooltipReact,
      link: `${baseLink}/tooltip/index.tsx`,
    },
    {
      name: "Accordion",
      component: AccordionReact,
      link: `${baseLink}/accordion/index.tsx`,
    },
    {
      name: "Checkbox",
      component: CheckBoxReact,
      link: `${baseLink}/checkbox/index.tsx`,
    },
    {
      name: "Alert Dialog",
      component: AlertDialogReact,
      link: `${baseLink}/alertDialog/index.tsx`,
    },
    {
      name: "Collapsible",
      component: CollabsibleReact,
      link: `${baseLink}/collapsible/index.tsx`,
    },
    {
      name: "Context Menu",
      component: ContextMenuReact,
      link: `${baseLink}/contextMenu/index.tsx`,
    },
    {
      name: "Dialog",
      component: ReactDialog,
      link: `${baseLink}/dialog/index.tsx`,
    },
    {
      name: "Menubar",
      component: MenuBarReact,
      link: `${baseLink}/menuBar/index.tsx`,
    },
  ];
  return allComponents;
}
