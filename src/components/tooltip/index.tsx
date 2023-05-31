import * as Tooltip from "@radix-ui/react-tooltip";

export default function TooltipReact() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <button
            type="button"
            className="px-3 py-2 rounded-md bg-slate-900 text-slate-200">
            Hover me!
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="px-3 py-2 rounded-md bg-slate-900 text-slate-200"
            sideOffset={13}>
            Sorry but, look at yourself in the mirror!!
            <Tooltip.Arrow className="fill-slate-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
