"use client";
import { useState } from "react";
import LinkItems from "../links/linkItems";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Overlay from "../overlay/overlay";
import Image from "next/image";
import Menu from "/public/menuBar.svg";
import MenuOpen from "/public/menu-open.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const controls = useAnimationControls();
  const controls2 = useAnimationControls();

  const openMenu = () => {
    setOpen(!open);
    controls.start({ x: 0, opacity: 1 });
    controls2.start({ x: -50, opacity: 0 });
  };

  const closeMenu = () => {
    setOpen(false);
    controls.start({ x: -50, opacity: 0 });
    controls2.start({ x: 0, opacity: 1 });
  };

  return (
    <>
      <AnimatePresence>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={openMenu}
          className="md:hidden overflow-hidden"
        >
          <motion.figure
            animate={controls2}
            initial={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative w-[50px] h-[50px]"
          >
            <Image src={Menu} fill priority alt="menu icon" />
          </motion.figure>
          <motion.figure
            animate={controls}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-[50px] h-[50px]"
          >
            <Image src={MenuOpen} fill priority alt="menu icon" />
          </motion.figure>
        </motion.button>

        {open && (
          <motion.aside
            key="aside"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Overlay close={closeMenu}>
              <LinkItems />
            </Overlay>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
export default Sidebar;
