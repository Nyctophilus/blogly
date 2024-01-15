import Form from "./form";

const Contact = () => {
  return (
    <main className="container min-h-[calc(100svh-360px)] px-[10dvw]">
      <h1 className="capitalize font-bold text-6xl text-center mb-8">
        contact us
      </h1>

      <div className="flex min-h-[50svh]">
        <div className="w-[50%] border-y-[2px] border-r-[2px] flex flex-col justify-center gap-12">
          <h2 className="font-bold text-5xl">
            I love to collaborate and make awesome content. Let&rsquo;s talk!
          </h2>
          <div className="relative">
            <hr className="absolute w-[30%] h-1 left-0 top-[-20px] bg-black" />
            <p className="font-medium">GET IN TOUCH</p>
            <p className="font-medium text-lg">
              35st sidi-bishr masjed bahrii,Alexandria, Egypt.
            </p>
            <p className="font-medium text-lg">+20 1000 96 212 7</p>
          </div>

          <p className="font-medium text-base underline underline-offset-4">
            mohammed.yuossry@gmail.com
          </p>
        </div>
        <div className="w-[50%] border-y-[2px] flex flex-col justify-center items-center gap-6">
          <h2 className="uppercase w-[70%] font-bold">send me a message</h2>

          <Form />
        </div>
      </div>
    </main>
  );
};
export default Contact;
