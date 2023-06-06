import AccordionReact from "../components/accordion";
import AlertDialogReact from "../components/alertDialog";
import CheckBoxReact from "../components/checkbox";
import CollabsibleReact from "../components/collabsible";
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
      name: "Collabsible",
      component: CollabsibleReact,
      link: `${baseLink}/collabsible/index.tsx`,
    },
  ];
  return allComponents;
}
