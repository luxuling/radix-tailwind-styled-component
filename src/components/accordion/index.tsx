import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function AccordionReact() {
  const accordionItems = [
    {
      title: "First Acrticle",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ratione ab iure consectetur totam rerum fugit. Quaerat.",
    },
    {
      title: "Second Acrticle",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ratione ab iure consectetur totam rerum fugit. Quaerat.",
    },
    {
      title: "Third Acrticle",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ratione ab iure consectetur totam rerum fugit. Quaerat.",
    },
  ];
  return (
    <div className="w-full md:w-[350px] h-min">
      <Accordion.Root
        type="single"
        collapsible
        className="px-3 w-full bg-gray-50 rounded-md text-slate-950 focus-within:ring focus-within:ring-purple-500">
        {accordionItems.map((item, index) => (
          <Accordion.Item value={`item-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger className="flex items-center justify-between w-full h-[45px] group radix-state-open:border-b">
                {item.title}
                <ChevronDownIcon className="transition-all duration-300 ease-in-out group-radix-state-open:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden transform radix-state-open:animate-slideDown radix-state-closed:animate-slideUp">
              <p className="p-3">{item.desc}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
