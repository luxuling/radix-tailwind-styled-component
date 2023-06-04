import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useState } from "react";

export default function AlertDialogReact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AlertDialog.Root onOpenChange={(state) => setIsOpen(state)}>
      <AlertDialog.Trigger asChild>
        <button className="px-3 py-2 rounded-md bg-slate-50 text-slate-900">
          Leave her
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className={`${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          } transition-all duration-200 ease-in-out flex fixed inset-0 justify-center items-center p-4 w-full h-full bg-opacity-10 drop-shadow-lg backdrop-blur-xl bg-slate-900 z-[99]`}>
          <AlertDialog.Content
            className={`${
              isOpen
                ? "visible opacity-100 scale-100"
                : "invisible opacity-0 scale-0"
            } p-4 w-full md:w-[500px]  md:text-base text-sm rounded-md text-slate-900 bg-slate-50 transition-all ease-in-out duration-200`}>
            <AlertDialog.Title className="mb-2 font-medium">
              Are you absolutely sure?
            </AlertDialog.Title>
            <AlertDialog.Description>
              This will make you happier and not stressed, you can save more
              money, and enjoy your life.
            </AlertDialog.Description>
            <div className="flex gap-4 justify-end items-center py-3">
              <AlertDialog.Cancel asChild>
                <button className="px-3 py-2 text-slate-900 hover:underline">
                  I can't
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button className="px-3 py-2 bg-purple-600 rounded-md text-slate-50">
                  Absolutely Yes
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
