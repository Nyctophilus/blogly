const Loading = () => {
  return (
    <div className="animate-pulse overflow-hidden relative flex flex-col bg-clip-border rounded-xl bg-white shadow-md w-full max-w-[500px] h-[700px]">
      <div className="w-full h-[40%] bg-gray-500/50"></div>
      <div className="flex flex-col h-[60%] justify-between">
        <div className="p-6">
          <div className="rounded-3xl w-[50%] h-[35px] bg-gray-500/50 mb-5"></div>
          <div className="rounded-3xl h-[30px] bg-gray-500/50"></div>
          <div className="rounded-3xl h-[30px] bg-gray-500/50 mt-2"></div>
        </div>
        <div className="p-6">
          <div className="mt-auto flex justify-between items-center w-full gap-8">
            <div className="flex gap-2">
              <div className="h-[35px] w-[35px] bg-gray-500/50 rounded-full"></div>
              <div className="flex flex-col gap-2">
                <div className="rounded-3xl h-[8px] w-[100px] bg-gray-500/50"></div>
                <div className="rounded-3xl h-[8px] w-[100px] bg-gray-500/50"></div>
                <div className="rounded-3xl h-[8px] w-[100px] bg-gray-500/50"></div>
              </div>
            </div>
            <div className="rounded-3xl h-[30px] w-[100px] bg-gray-500/50"></div>
          </div>
          <div className="rounded-3xl h-[30px] w-[130px] mx-auto bg-gray-500/50 mt-8"></div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
