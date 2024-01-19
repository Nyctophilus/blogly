"use client";
import { useState } from "react";
import LinkItems from "../links/linkItems";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Overlay from "../overlay/overlay";
import Image from "next/image";
import Menu from "/public/menuBar.svg";

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
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={openMenu}
        className="md:hidden overflow-hidden"
      >
        <Image src={Menu} width={50} height={50} priority alt="menu icon" />
      </motion.button>

      <AnimatePresence>
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
