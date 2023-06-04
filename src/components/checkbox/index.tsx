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
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="mb-5 text-sm font-semibold text-center md:text-base text-slate-50">
        Is checkbox checked? : {isCheck ? "checked" : "unchecked"}
      </h1>
      <div className="flex gap-3 items-center">
        <Checkbox.Root
          className="rounded-sm bg-slate-50 w-[18px] h-[18px] md:w-[24px] md:h-[24px] flex justify-center items-center"
          onCheckedChange={checkChages}>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className="text-sm text-slate-50 md:text-base">
          Accept terms and conditions.
        </span>
      </div>
    </div>
  );
}
