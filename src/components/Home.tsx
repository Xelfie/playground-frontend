import QuickAccess from "./QuickAccess";

const Home = () => (
  <div className="flex flex-1 flex-col items-start justify-center gap-6 lg:flex-row lg:items-center lg:justify-start">
    <h1 className="relative flex flex-col gap-1 p-4 text-2xl font-light lg:text-4xl">
      <div className="absolute top-8 -m-4 h-20 w-0.5 bg-rose-200 lg:h-28" />
      <span className="ml-1">Welcome to my</span>
      <span className="font-['Courier_New'] text-5xl text-rose-200 lg:text-7xl">
        Playground
      </span>
    </h1>

    <div className="mx-10 hidden h-3/4 w-[1px] bg-slate-700 lg:inline" />

    <QuickAccess />
  </div>
);

export default Home;
