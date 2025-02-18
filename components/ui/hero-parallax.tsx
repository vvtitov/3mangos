"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-900, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-full overflow-hidden antialiased relative flex flex-col self-auto [perspective:1600px] [transform-style:preserve-3d] z-[1]"
    >
      <Header />
      <motion.div
        className="z-[-2]"
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-15 mb-5 rotate-3">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-5 space-x-15 -rotate-2">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-15 rotate-3">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { locale } = useLanguage();
  const dictionary = getDictionary(locale);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row max-w-5xl relative mx-auto w-full items-center select-none justify-between pt-[8rem] md:pt-[4rem]"
    >
      <div className="flex flex-col gap-4 max-w-4xl px-20 w-full mx-auto">
        <p className="text-5xl md:text-7xl lg:text-8xl font-bold max-w-sm md:max-w-2xl lg:w-[38rem] min-w-[10rem]">
          <strong className="text-primary w-full text-balance">
            {dictionary.hero.title}
          </strong>
        </p>
        <p className="text-foreground text-2xl md:text-2xl dark:text-foreground text-balance max-w-md min-w-[16rem] pl-1">
          {dictionary.hero.subtitle}
        </p>
        <div className="flex justify-start pl-2 mt-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant={"outline"}
              size={"lg"}
              className="py-8 px-12 text-xl rounded-full bg-gradient-to-bl from-primary via-primary/80 to-secondary text-foreground items-center justify-center font-medium"
              onClick={() => {
                window.location.href = "mailto:contacto@3mangos.site";
              }}
            >
              {dictionary.hero.cta}
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="w-[400px] shrink-0 md:translate-x-[-15rem]">
        <Image
          src="/mango-hero3.png"
          alt="Floating Mango"
          width={400}
          height={400}
          className="rotate-[5deg] lg:rotate-[-20deg] hover:rotate-[-10deg] duration-1000 scale-75 md:scale-100 md:pt-60 -translate-y-10 md:-translate-y-0"
        />
      </div>
    </section>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="500"
          width="500"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full rotate-12">
        🥭🥭🥭_________________
      </div>
    </motion.div>
  );
};
