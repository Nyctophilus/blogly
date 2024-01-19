const Loading = () => {
  return (
    <div className="animate-pulse overflow-hidden relative flex flex-col bg-clip-border rounded-xl bg-white shadow-md max-w-[280px] lg:max-w-[24rem]">
      <div className="w-full h-[260px] bg-gray-500/50"></div>
      <div className="p-6">
        <div className="rounded-3xl w-[50%] h-[35px] bg-gray-500/50 mb-5"></div>
        <div className="rounded-3xl h-[30px] bg-gray-500/50"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between w-full gap-8">
          <div className="flex gap-1">
            <div className="h-[35px] w-[35px] bg-gray-500/50 rounded-full"></div>
            <div className="rounded-3xl h-[35px] w-[100px] bg-gray-500/50"></div>
          </div>
          <div className="rounded-3xl h-[35px] w-[60px] bg-gray-500/50"></div>
        </div>
        <div className="rounded-3xl h-[30px] w-[130px] mx-auto bg-gray-500/50 mt-5"></div>
      </div>
    </div>
  );
};
export default Loading;
