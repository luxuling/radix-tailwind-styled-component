import * as Collaabible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function CollapsibleReact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collaabible.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className="max-w-[330px] w-full text-sm md:text-base max-h-[300px] h-full"
    >
      <div className="flex items-center justify-between w-full py-3 text-slate-50">
        <h1>@lixuling starred 4 repositories</h1>
        <Collaabible.Trigger>
          <button className="p-1 rounded-full text-slate-900 bg-slate-50">
            {isOpen ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collaabible.Trigger>
      </div>
      <div className="h-[40px] px-3 rounded-md bg-slate-50 flex items-center text-slate-900">
        <h1>@radix-ui/Tooltip</h1>
      </div>
      <Collaabible.Content className="flex flex-col mt-2 space-y-2">
        <div className="h-[40px] px-3 rounded-md bg-slate-50 flex items-center text-slate-900">
          <h1>@radix-ui/Accordion</h1>
        </div>
        <div className="h-[40px] px-3 rounded-md bg-slate-50 flex items-center text-slate-900">
          <h1>@radix-ui/Checkbox</h1>
        </div>
        <div className="h-[40px] px-3 rounded-md bg-slate-50 flex items-center text-slate-900">
          <h1>@radix-ui/alertDialog</h1>
        </div>
      </Collaabible.Content>
    </Collaabible.Root>
  );
}
