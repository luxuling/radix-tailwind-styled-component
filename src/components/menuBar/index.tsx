import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

export default function MenuBarReact() {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  const menubarClassName = {
    root: "flex items-center px-4 py-2 space-x-4 text-sm rounded-md md:text-base bg-slate-50",
    trigger:
      "transition-all duration-300 ease-in-out outline-none text-slate-900 hover:text-purple-500 radix-highlighted:underline radix-highlighted:text-purple-500 underline-offset-2 radix-state-open:text-purple-500 radix-state-open:underline",
    content: "w-[260px] bg-slate-50 rounded-md p-2 text-slate-900 text-sm",
    item: "flex items-center justify-between px-5 py-1 rounded-md outline-none radix-highlighted:bg-purple-500 radix-highlighted:text-slate-50 radix-disabled:text-slate-300 w-full",
    seperator: "w-full h-[1px] bg-slate-400",
    inputIcon: "absolute left-3",
  };
  return (
    <Menubar.Root className={menubarClassName.root}>
      <Menubar.Menu>
        <Menubar.Trigger className={menubarClassName.trigger}>
          File
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className={menubarClassName.content}
            align="start"
            sideOffset={18}
            alignOffset={-9}
          >
            <Menubar.Item className={menubarClassName.item}>
              New Tab <div>⌘ T</div>
            </Menubar.Item>
            <Menubar.Item className={menubarClassName.item}>
              New Window <div>⌘ N</div>
            </Menubar.Item>
            <Menubar.Item className={menubarClassName.item} disabled>
              New Incognito Window
            </Menubar.Item>
            <Menubar.Separator className={menubarClassName.seperator} />
            <Menubar.Sub>
              <Menubar.SubTrigger className={menubarClassName.item}>
                Share
                <div>
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent
                  className={menubarClassName.content}
                  alignOffset={-5}
                >
                  <Menubar.Item className={menubarClassName.item}>
                    Email Link
                  </Menubar.Item>
                  <Menubar.Item className={menubarClassName.item}>
                    Messages
                  </Menubar.Item>
                  <Menubar.Item className={menubarClassName.item}>
                    Notes
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator className={menubarClassName.seperator} />
            <Menubar.Item className={menubarClassName.item}>
              Print… <div>⌘ P</div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className={menubarClassName.trigger}>
          Edit
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className={menubarClassName.content}
            align="start"
            sideOffset={18}
            alignOffset={-9}
          >
            <Menubar.Item className={menubarClassName.item}>
              Undo <div>⌘ Z</div>
            </Menubar.Item>
            <Menubar.Item className={menubarClassName.item}>
              Redo <div>⇧ ⌘ Z</div>
            </Menubar.Item>
            <Menubar.Separator className={menubarClassName.seperator} />
            <Menubar.Sub>
              <Menubar.SubTrigger className={menubarClassName.item}>
                Find
                <div>
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>

              <Menubar.Portal>
                <Menubar.SubContent
                  className={menubarClassName.content}
                  alignOffset={-5}
                >
                  <Menubar.Item className={menubarClassName.item}>
                    Search the web…
                  </Menubar.Item>
                  <Menubar.Separator className={menubarClassName.seperator} />
                  <Menubar.Item className={menubarClassName.item}>
                    Find…
                  </Menubar.Item>
                  <Menubar.Item className={menubarClassName.item}>
                    Find Next
                  </Menubar.Item>
                  <Menubar.Item className={menubarClassName.item}>
                    Find Previous
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator className={menubarClassName.seperator} />
            <Menubar.Item className={menubarClassName.item}>Cut</Menubar.Item>
            <Menubar.Item className={menubarClassName.item}>Copy</Menubar.Item>
            <Menubar.Item className={menubarClassName.item}>Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className={menubarClassName.trigger}>
          View
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className={menubarClassName.content}
            align="start"
            sideOffset={18}
            alignOffset={-9}
          >
            {CHECK_ITEMS.map((item) => (
              <Menubar.CheckboxItem
                className={menubarClassName.item}
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                <Menubar.ItemIndicator className={menubarClassName.inputIcon}>
                  <CheckIcon />
                </Menubar.ItemIndicator>
                {item}
              </Menubar.CheckboxItem>
            ))}
            <Menubar.Separator className={menubarClassName.seperator} />
            <Menubar.Item className={menubarClassName.item}>
              Reload <div>⌘ R</div>
            </Menubar.Item>
            <Menubar.Item className={menubarClassName.item} disabled>
              Force Reload <div>⇧ ⌘ R</div>
            </Menubar.Item>
            <Menubar.Separator className={menubarClassName.seperator} />
            <Menubar.Item className={menubarClassName.item}>
              Toggle Fullscreen
            </Menubar.Item>
            <Menubar.Separator className={menubarClassName.seperator} />
            <Menubar.Item className={menubarClassName.item}>
              Hide Sidebar
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className={menubarClassName.trigger}>
          Profiles
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className={menubarClassName.content}
            align="start"
            sideOffset={18}
            alignOffset={-9}
          >
            <Menubar.RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <Menubar.RadioItem
                  className={menubarClassName.item}
                  key={item}
                  value={item}
                >
                  <Menubar.ItemIndicator className={menubarClassName.inputIcon}>
                    <DotFilledIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.RadioItem>
              ))}
              <Menubar.Separator className={menubarClassName.seperator} />
              <Menubar.Item className={menubarClassName.item}>
                Edit…
              </Menubar.Item>
              <Menubar.Separator className={menubarClassName.seperator} />
              <Menubar.Item className={menubarClassName.item}>
                Add Profile…
              </Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
