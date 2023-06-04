import { Icon } from "@iconify/react";
import Wrapper from "./components/wrapper";
import useComponents from "./data/components";

function App() {
  const componets = useComponents();
  const buttonClass =
    "flex gap-3 items-center px-4 py-2 rounded-md transition-all duration-300 ease-in-out bg-slate-900 text-slate-50 hover:translate-y-1 hover:underline";
  return (
    <div className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="py-10 text-slate-50">
        <h1 className="text-lg font-bold text-center">
          Radix UI & Tailwind CSS
        </h1>
        <div className="flex gap-2 justify-center items-center mt-4">
          <a
            href="https://www.radix-ui.com/"
            target="_blank"
            className={buttonClass}>
            <Icon icon="tabler:brand-radix-ui" />
            <span>Radix UI</span>
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className={buttonClass}>
            <Icon icon="devicon:tailwindcss" />
            <span>Tailwind CSS</span>
          </a>
        </div>
        <div className="flex justify-center items-center mt-5">
          <a
            href="https://github.com/luxuling/radix-tailwind-styled-component"
            target="_blank"
            className={buttonClass}>
            <Icon icon="mdi:github" />
            <span>Repo</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-7 items-center w-full lg:flex-row lg:flex-wrap lg:justify-center">
        {componets.map((Component) => (
          <Wrapper
            key={Component.name}
            name={Component.name}
            link={Component.link}>
            <Component.component />
          </Wrapper>
        ))}
      </div>
    </div>
  );
}

export default App;
