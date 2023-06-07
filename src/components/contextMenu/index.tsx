import * as ContextMenu from "@radix-ui/react-context-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import * as React from "react";

export default function ContextMenuReact() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("Budi");

  const contextMenuStyle = {
    trigger:
      "w-[250px] h-[200px] border-2 border-dashed rounded-md border-slate-50 flex items-center justify-center text-slate-50",
    seperator: "w-full h-[1px] bg-purple-300 my-1",
    content: "w-[280px] bg-slate-50 rounded-md p-2 flex flex-col gap-1",
    item: "flex relative  py-1 pl-7 justify-between pr-2 rounded-md outline-none bg-slate-50 hover:bg-purple-500 hover:text-slate-50 cursor-pointer radix-disabled:cursor-default radix-disabled:bg-transparent radix-disabled:text-slate-400 text-purple-500 text-sm items-center radix-highlighted:bg-purple-500 radix-highlighted:text-white",
    indicator: "absolute -translate-y-1/2 left-2 top-1/2",
    label: "text-xs text-purple-500 pl-7",
  };

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className={contextMenuStyle.trigger}>
        <span>Right click here!</span>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className={contextMenuStyle.content}>
          <ContextMenu.Item className={contextMenuStyle.item}>
            Back
            <span>⌘+[</span>
          </ContextMenu.Item>
          <ContextMenu.Item className={contextMenuStyle.item} disabled>
            Forward
            <span>⌘+]</span>
          </ContextMenu.Item>
          <ContextMenu.Item className={contextMenuStyle.item}>
            Reload
            <span>⌘+R</span>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className={contextMenuStyle.item}>
              More Tools
              <ChevronRightIcon />
              <ContextMenu.Portal>
                <ContextMenu.SubContent className={contextMenuStyle.content}>
                  <ContextMenu.Item className={contextMenuStyle.item}>
                    Save Page As
                    <span>⌘+S</span>
                  </ContextMenu.Item>
                  <ContextMenu.Item className={contextMenuStyle.item}>
                    Create Shortcut..
                  </ContextMenu.Item>
                  <ContextMenu.Item className={contextMenuStyle.item}>
                    Create Window..
                  </ContextMenu.Item>
                  <ContextMenu.Separator
                    className={contextMenuStyle.seperator}
                  />
                  <ContextMenu.Item className={contextMenuStyle.item}>
                    Developer Tools..
                  </ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Portal>
            </ContextMenu.SubTrigger>
          </ContextMenu.Sub>
          <ContextMenu.Separator className={contextMenuStyle.seperator} />
          <ContextMenu.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={() => setBookmarksChecked(!bookmarksChecked)}
            className={contextMenuStyle.item}
          >
            <ContextMenu.ItemIndicator className={contextMenuStyle.indicator}>
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Boorkmarks
            <span>⌘+B</span>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={() => setUrlsChecked(!urlsChecked)}
            className={contextMenuStyle.item}
          >
            <ContextMenu.ItemIndicator className={contextMenuStyle.indicator}>
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Full URs
          </ContextMenu.CheckboxItem>
          <ContextMenu.Separator className={contextMenuStyle.seperator} />

          <ContextMenu.Label className={contextMenuStyle.label}>
            People
          </ContextMenu.Label>
          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenu.RadioItem
              className={contextMenuStyle.item}
              value="Jhon Doe"
            >
              <ContextMenu.ItemIndicator className={contextMenuStyle.indicator}>
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Jhon Doe
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem
              className={contextMenuStyle.item}
              value="Budi"
            >
              <ContextMenu.ItemIndicator className={contextMenuStyle.indicator}>
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Mr.Budi
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
