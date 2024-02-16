const Loading = () => (
  <div className="container animate-pulse overflow-hidden relative bg-clip-border rounded-xl bg-white shadow-md w-[80dvw] h-[80dvh] my-24 sm:my-36 p-6">
    <div className="flex flex-wrap justify-between h-full">
      <div className="w-full lg:w-[30%] h-[300px] lg:h-2/3 bg-gray-500/50 rounded-xl"></div>
      <div className="flex flex-col gap-8 w-full lg:w-[63%]">
        <div className="rounded-3xl h-[30px] w-2/3 bg-gray-500/50"></div>
        <div className="rounded-3xl h-[80px] w-1/2 bg-gray-500/50"></div>
        <div className="rounded-3xl flex-grow w-full bg-gray-500/50"></div>
        <div className="rounded-3xl h-5 w-12 bg-gray-500/50 self-end"></div>
      </div>
    </div>
  </div>
);
export default Loading;
