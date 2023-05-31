import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

export default function CheckBoxReact() {
  const [isCheck, setIsCheck] = React.useState<boolean | "indeterminate">(
    false
  );
  const checkChages = (state: Checkbox.CheckedState) => {
    setIsCheck(state);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="mb-5 text-lg font-semibold text-center">
        Is checkbox checked? : {isCheck ? "checked" : "unchecked"}
      </h1>
      <div className="flex items-center gap-3">
        <Checkbox.Root
          className="rounded-md bg-slate-50 w-[24px] h-[24px] flex justify-center items-center"
          onCheckedChange={checkChages}>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className="text-slate-900">Accept terms and conditions.</span>
      </div>
    </div>
  );
}
