import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function ReactDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="px-3 py-2 text-purple-500 rounded-md bg-slate-50 active:ring">
          Edit Profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="transition-all duration-200 ease-in-out fixed inset-0 w-full h-full bg-opacity-10 drop-shadow-lg backdrop-blur-xl bg-slate-900 z-[99]" />
        <Dialog.Content className="fixed w-[280px] md:w-[380px] bg-slate-50 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-[100] p-4 rounded-md flex flex-col gap-2">
          <Dialog.Title className="font-semibold">Edit profile</Dialog.Title>
          <Dialog.Description className="text-sm">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="text-sm md:text-base md:flex md:items-center md:justify-between">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 mt-2 rounded-md outline-none md:w-[230px] ring ring-purple-500"
              id="name"
              defaultValue="Joko"
            />
          </fieldset>
          <fieldset className="text-sm md:text-base md:flex md:items-center md:justify-between">
            <label className="" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 mt-2 rounded-md outline-none ring ring-purple-500 md:w-[230px]"
              id="username"
              defaultValue="@jhonjoke"
            />
          </fieldset>
          <Dialog.Close asChild className="ml-auto">
            <button className="px-3 py-2 mt-3 text-white transition-all duration-300 ease-in-out bg-purple-500 rounded-md hover:bg-purple-400 hover:translate-y-1">
              Save changes
            </button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button
              className="absolute p-1 rounded-full top-2 right-2 hover:bg-purple-500/30"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
