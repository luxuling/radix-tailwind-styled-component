import * as Tooltip from "@radix-ui/react-tooltip";

export default function TooltipReact() {
  return (
    <div className="h-[70px] w-[200px] flex justify-center">
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <button
              type="button"
              className="px-3 py-2 text-sm rounded-md bg-slate-50 text-slate-900 md:text-base">
              Hover me!
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="px-3 py-2 text-sm rounded-md bg-slate-50 text-slate-900 md:text-base">
              Sorry but, look at yourself in the mirror!!
              <Tooltip.Arrow className="fill-slate-50" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}
