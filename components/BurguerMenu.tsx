import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeSwitch } from "./ui/dark-toggle-button";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useLanguage();
  const dictionary = getDictionary(locale);

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
    <div id="burgerMenu" className="w-full h-full lg:hidden items-end">
      {/* Mobile Menu Button */}
      <button
        className="dark:text-foreground text-foreground items-center justify-center pt-2 hover:scale-105 duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={36} />
      </button>
      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed flex flex-col justify-center top-0 right-0 w-full max-w-full max-h-full bg-background dark:bg-background z-[2]"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="relative flex flex-col text-left mx-auto z-[-3] gap-5">
          <div className="mb-20">
            <ModeSwitch />
          </div>
          {[
            { name: dictionary.header.home, link: "#hero" },
            { name: dictionary.header.about, link: "#about" },
            { name: dictionary.header.services, link: "#services" },
            { name: dictionary.header.contact, link: "#contact" },
          ].map((item) => (
            <Link href={item.link} key={item.name}>
              <p
                className="justify-center items-center text-2xl text-foreground transition-colors hover:text-primary duration-300"
                onClick={handleClose}
              >
                {item.name}
              </p>
            </Link>
          ))}
          <div className="flex justify-center items-center">
            <button
              className="text-foreground focus:outline-none hover:scale-105 align-middle border-2 border-foreground rounded-full p-2 mt-20 hover:text-foreground duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <X size={36} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
