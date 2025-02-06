import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeSwitch } from "./ui/dark-toggle-button";

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
    <div id="burgerMenu" className="lg:hidden items-end">
      {/* Mobile Menu Button */}
      <button
        className="dark:text-foreground text-foreground focus:outline-none "
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={34} />
      </button>
      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed flex justify-center top-0 right-0 w-full max-w-full max-h-full bg-background dark:bg-background z-[2] px-10"
      >
        <div className="relative text-center my-auto z-[-3]">
          <div className="pb-20">
            <ModeSwitch />
          </div>
          {[
            { name: "HOME", link: "/" },
            { name: "ABOUT", link: "#about" },
            { name: "SERVICES", link: "#services" },
            { name: "CONTACT", link: "#contact" },
          ].map((item) => (
            <Link href={item.link} key={item.name}>
              <p
                className="text-2xl text-foreground transition-colors py-2 px-4 mb-3 hover:rotate-2 hover:text-primary"
                onClick={handleClose}
              >
                {item.name}
              </p>
            </Link>
          ))}
          <div className="relative w-full text-center justify-center pt-20">
            <button
              className="text-foreground focus:outline-none hover:scale-110 align-middle hover:text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <X size={34} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
