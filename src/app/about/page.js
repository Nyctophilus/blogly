"use client";

import Link from "next/link";
import styles from "./about.module.css";
import { motion } from "framer-motion";

const counters = [
  {
    name: "clients",
    count: 2,
  },
  {
    name: "projects",
    count: 87,
  },
  {
    name: "exp. years",
    count: 1.5,
  },
];

const About = () => {
  return (
    <main
      className={`${styles.main} min-h-[calc(100svh-80px)] grid place-items-center py-12`}
    >
      <div className="container relative">
        <motion.h1
          animate={{ opacity: [0, 1], scale: [0.5, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="capitalize font-bold text-6xl xl:text-[12rem] text-center mb-8"
        >
          about us
        </motion.h1>
        <motion.div
          animate={{ opacity: [0, 1], scale: [0.7, 1] }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <div className="w-[60%]">
            <p className="mb-4 font-bold">
              I have designed, structured, and developed this blogging website
              to add my blogs in the future. It has CRUD Operations via
              next.js14 api endpoints and connected to MongoDB
            </p>
            <p className="font-bold">
              The frontend is built using ReactJS with Next.js framework. For
              styling, Tailwind CSS v3 was used along with custom classes. For
              backend is built using next14 endpoint apis connecting to
              Mongoose.
            </p>
          </div>
          <div className="w-[40%] flex flex-col">
            <h3 className="uppercase font-bold mb-4">follow my journey</h3>
            <Link
              href={"https://github.com/Nyctophilus"}
              className="capitalize font-black mb-2 w-fit"
            >
              githug
            </Link>
            <Link
              href={"https://www.instagram.com/muhammed_yuossry/"}
              className="capitalize font-black mb-2 w-fit"
            >
              instagram
            </Link>
            <Link
              href={"https://nyctophilus.github.io/next-portfolio/"}
              className="capitalize font-black mb-2 w-fit"
            >
              portfolio
            </Link>
            <Link
              href={"https://www.twitter.com/muhammed_yuossry/"}
              className="capitalize font-black mb-2 w-fit"
            >
              twitter
            </Link>
            <Link
              href={"https://www.facebook.com/LocaMood"}
              className="capitalize font-black w-fit"
            >
              facebook
            </Link>
          </div>
        </motion.div>
        <div className="mt-12 flex gap-5 justify-between border-y-4 border-[black] px-4">
          {counters.map(({ name, count }, i) => (
            <motion.div
              key={name}
              animate={{ opacity: [0, 1], scale: [0.5, 1] }}
              transition={{
                delay: i * 0.3 + 1,
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <p className="font-black text-center text-3xl">{count}</p>
              <p className="capitalize font-medium text-xl">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default About;
