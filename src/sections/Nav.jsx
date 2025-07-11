import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { AnimatePresence, motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="  transition-colors text-neutral-400 hover:text-white">
        <Link>Home</Link>
      </li>
      <li className="transition-colors text-neutral-400 hover:text-white">
        <Link>About</Link>
      </li>
      <li className="transition-colors text-neutral-400 hover:text-white">
        <Link>Work</Link>
      </li>
      <li className="transition-colors text-neutral-400 hover:text-white">
        <Link>Contact</Link>
      </li>
    </ul>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`fixed z-20 inset-x-0 w-full ${isOpen? " bg-primary/90 ":  "bg-primary/40" } pt-2`}>
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-2 sm:py-0">
          <Link
            to="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            All
          </Link>
          <button
            onClick={handleMenu}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img src={isOpen ? close : menu} alt="menu" className="w-6 h-6" />
          </button>
          <nav className="hidden sm:flex ">
            <Navigation />
          </nav>
        </div>
        <AnimatePresence initial={false}>
          
          {isOpen ? (
            <motion.div
              className="block overflow-hidden text-center sm:hidden "
              initial={{ opacity: 0, x:-10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1  }}
              style={{ height: "100vh" }}
              exit={{ opacity: 0, x: -10 }}
            >
              <nav>
                <Navigation />
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
