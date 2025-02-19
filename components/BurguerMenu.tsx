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
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      id="burgerMenu"
      className="w-full h-full lg:hidden flex flex-col items-end"
    >
      {/* Mobile Menu Button */}
      <button
        className="dark:text-foreground text-foreground flex items-center justify-center hover:scale-105 transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={36} />
      </button>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-full bg-background z-[2] flex items-center justify-center overflow-hidden"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col text-left w-1/3 space-y-5">
          <div className="mb-10">
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
                className="text-2xl text-foreground transition-colors hover:text-primary duration-300"
                onClick={handleClose}
              >
                {item.name}
              </p>
            </Link>
          ))}
          <div className="flex justify-center items-center pt-10">
            <button
              className="text-foreground focus:outline-none hover:scale-105 border-2 border-foreground rounded-full p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Close menu"
            >
              <X size={36} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
