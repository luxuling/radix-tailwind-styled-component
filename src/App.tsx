import AccordionReact from "./components/accordion";
import CheckBoxReact from "./components/checkbox";
import TooltipReact from "./components/tooltip";

function App() {
  return (
    <div className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col gap-7 items-center w-full lg:flex-row lg:flex-wrap lg:justify-center">
        <div className="md:w-[600px] w-full p-4 h-[500px] bg-slate-900 rounded-md flex justify-center items-center">
          <AccordionReact />
        </div>
        <div className="md:w-[600px] w-full p-4 h-[500px] bg-slate-900 rounded-md flex justify-center items-center">
          <TooltipReact />
        </div>
        <div className="md:w-[600px] w-full p-4 h-[500px] bg-slate-900 rounded-md flex justify-center items-center">
          <CheckBoxReact />
        </div>
      </div>
    </div>
  );
}

export default App;
