import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div id="burgerMenu" className=" lg:hidden items-end">
      {/* Mobile Menu Button */}
      <button
        className="dark:text-white text-[#333333] focus:outline-none w-12 transition-transform transform hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={34} /> : <Menu size={34} />}
      </button>
      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed flex justify-center top-0 right-0 w-full max-w-full max-h-full bg-[#333333] z-[12] px-10"
      >
        <div className="relative text-right pt-40">
          <div className="flex bg-white/20 w-full text-center">
            <button
              className="dark:text-white text-[#333333] focus:outline-none w-12 transition-transform transform hover:scale-110 pt-20"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={34} /> : <Menu size={34} />}
            </button>
          </div>
          {[
            { name: "HOME", link: "/" },
            { name: "ABOUT", link: "#about" },
            { name: "SERVICES", link: "#services" },
            { name: "CONTACT", link: "#contact" },
          ].map((item) => (
            <Link href={item.link} key={item.name}>
              <p
                className="text-2xl text-white transition-colors hover:text-gray-400"
                onClick={handleClose}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
