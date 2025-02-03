import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="burgerMenu" className="block lg:hidden relative items-end">
      {/* Mobile Menu Button */}
      <button
        className="dark:text-white text-[#333333] focus:outline-none w-12 justify-end"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={50} /> : <Menu size={34} />}
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
        <div className="flex flex-col py-20 w-lg gap-10 text-left -translate-x-[20vh] justify-start">
          {[
            { name: "HOME", link: "/" },
            { name: "ABOUT", link: "#about" },
            { name: "SERVICES", link: "#services" },
            { name: "CONTACT", link: "#contact" },
          ].map((item) => (
            <Link href="#" key={item.name}>
              <text href={item.link} className="text-2xl text-right">
                {item.name}
              </text>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
