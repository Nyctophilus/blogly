const Loading = () => {
  return (
    <div className="animate-puls overflow-hidden relative flex flex-col bg-clip-border rounded-xl bg-white shadow-md max-w-[24rem]">
      <div className="w-[390px] h-[260px] bg-gray-500/50"></div>
      <div className="p-6">
        <div className="h-[33px] bg-gray-500/50"></div>
        <div className="h-[32px] bg-gray-500/50"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="h-[35px] w-[35px] bg-gray-500/50 rounded-full"></div>
            <div className="h-[35px] w-[130px] bg-gray-500/50"></div>
          </div>
          <div className="h-[35px] w-[60px] bg-gray-500/50"></div>
        </div>
        <div className="h-[30px] w-[130px] mx-auto bg-gray-500/50 mt-5"></div>
      </div>
    </div>
  );
};
export default Loading;
