import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="burgerMenu" className="block lg:hidden relative mt-2">
      {/* Mobile Menu Button */}
      <button
        className="dark:text-white text-[#333333] focus:outline-none translate-x-20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={34} /> : <Menu size={34} />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0, translateY: -10 }}
        animate={
          isOpen
            ? { height: "auto", opacity: 1, translateY: 0 }
            : { height: 0, opacity: 0, translateY: -10 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-transparent text-left"
      >
        <div className="flex-row py-80 w-full -translate-x-10">
          {[
            { name: "HOME", link: "/" },
            { name: "ABOUT", link: "#about" },
            { name: "SERVICES", link: "#services" },
            { name: "CONTACT", link: "#contact" },
          ].map((item) => (
            <Button key={item.name} variant="link">
              <a
                href={item.link}
                className="text-3xl text-gray-600 dark:text-white/80 hover:text-gray-900 text-left"
              >
                {item.name}
              </a>
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
