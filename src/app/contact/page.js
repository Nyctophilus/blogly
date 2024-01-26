import Form from "./form";

export const metadata = {
  title: "Contact us",
  description:
    "this page is for contact form. you can send an email for us using the form.",
};


const Contact = () => {
  return (
    <main className="container min-h-[calc(100svh-360px)] px-[10dvw] py-10">
      <h1 className="capitalize font-bold text-3xl lg:text-6xl text-center mb-8">
        contact us
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 min-h-[50svh]">
        <div className="sm:w-[50%] sm:border-y-[2px] sm:border-r-[2px] flex flex-col justify-center gap-12">
          <h2 className="font-bold text-3xl lg:text-5xl">
            I love to collaborate and make awesome content. Let&rsquo;s talk!
          </h2>
          <div className="relative">
            <hr className="absolute w-[30%] h-1 left-0 top-[-20px] bg-black" />
            <p className="font-medium text-sm md:text-md">GET IN TOUCH</p>
            <p className="font-bold text-md md:text-lg">
              35st sidi-bishr masjed bahrii,Alexandria, Egypt.
            </p>
            <p className="font-medium text-lg">+20 1000 96 212 7</p>
          </div>

          <p className="font-medium text-base underline underline-offset-4">
            mohammed.yuossry@gmail.com
          </p>
        </div>
        <div className="sm:w-[50%] sm:border-y-[2px] flex flex-col justify-center items-center gap-6">
          <h2 className="uppercase w-[70%] font-bold">send me a message</h2>
          {/* [ ] handle mails */}
          <Form />
        </div>
      </div>
    </main>
  );
};
export default Contact;
