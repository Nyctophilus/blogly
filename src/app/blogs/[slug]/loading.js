const Loading = () => (
  <div className="animate-pulse overflow-hidden relative flex justify-between flex-col bg-clip-border rounded-xl bg-white shadow-md max-w-[280px] lg:max-w-[30rem]">
    <div className="flex gap-1 p-6 ">
      <div className="h-[58px] w-[58px] bg-gray-500/50 rounded-full"></div>
      <div className="flex flex-col gap-2 w-4/6">
        <div className="rounded-3xl h-[25px] w-1/2 bg-gray-500/50"></div>
        <div className="rounded-3xl h-[25px] w-1/2 bg-gray-500/50"></div>
      </div>
    </div>
  </div>
);
export default Loading;
