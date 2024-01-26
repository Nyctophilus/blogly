import MyButton from "@/components/button/button";
import Link from "next/link";

export default function Home() {
  const sectionStyles = `grid place-items-center min-h-[calc(100dvh-80px)] before:absolute before:inset-0 before:bg-[#0006] before:backdrop-lg before:z-[-1] after:absolute after:inset-0 after:bg-center	after:bg-no-repeat after:bg-cover after:z-[-2] after:bg-[url(https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]`;

  return (
    <>
      <main className={sectionStyles}>
        <div className="container flex flex-col lg:flex-row gap-[6rem] text-white">
          <div className="sm:w-[50%]">
            <h1 className="capitalize font-black text-5xl lg:text-8xl xl:text-8xlmb-5 tracking-widest lg:pb-[20svh]">
              blogly website
            </h1>
            <Link href={"/blogs"}>
              <MyButton classes={"mt-6 animate-pulse"}>
                read our stories.
              </MyButton>
            </Link>
          </div>
          <div className="lg:pt-[30svh] md:self-center relative before:absolute before:top-[-2rem] before:lg:top-[25svh] before:left-0 before:w-[20%] before:bg-white before:z-10 before:h-[2px] lg:max-w-[40%]">
            <h2 className="capitalize font-black text-2xl lg:text-5xl mb-5">
              Professional Blogging website
            </h2>
            <p className="text-xl lg:text-3xl">
              You can join us and start blogging rightnow. Highly secured and
              maintained blogging website. You can feel safe with us.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
