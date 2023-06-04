import * as React from "react";

interface WrapperProps {
  children: React.ReactNode;
  name: string;
  link: string;
}
export default function Wrapper({ children, name, link }: WrapperProps) {
  return (
    <div className="md:w-[600px] w-full relative p-4 h-[500px] bg-slate-900 rounded-md flex justify-center items-center overflow-hidden">
      <div className="h-[40px] w-full absolute bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg top-0 flex items-center px-3 justify-between">
        <h1 className="font-medium text-slate-50">{name}</h1>
        <a
          href={link}
          target="_blank"
          className="font-medium text-slate-50 hover:underline">
          Code
        </a>
      </div>
      {children}
    </div>
  );
}
