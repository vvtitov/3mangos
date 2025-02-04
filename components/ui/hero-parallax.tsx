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
import { AnimatedTooltipPreview } from "../TooltipHero";
// import { Cover } from "./cover";

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
    useTransform(scrollYProgress, [0, 0.2], [-900, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] overflow-hidden p-8 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] md:mb-60 lg:mb-[5vh]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-2 rotate-3">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-2 space-x-10 -rotate-2">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 rotate-3">
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
  return (
    <div className="flex flex-col md:flex-row max-w-4xl relative mx-auto w-full items-center select-none justify-between">
      <div className="flex flex-col gap-4 max-w-xl min-w-md mx-3">
        <div>
          <AnimatedTooltipPreview />
        </div>
        <h1 className="text-4xl font-bold dark:text-white pt-4">
          <strong className="text-orange-300 rounded-full ">
            UNLEASH YOUR MANGOS WITH OUR FRESH SOLUTIONS
          </strong>
        </h1>
        <section className="text-[#333333] text-2xl md:text-xl dark:text-neutral-200 max-w-lg">
          We are passionate developers and designers that are
          <strong> focused on build amazing products </strong> at lightspeed
          with the latest technologies and frameworks. <br />
        </section>
      </div>
      {/* <section className="max-w-xl md:text-2xl/10 mt-2 dark:text-neutral-200 hidden lg:block">
        We build beautiful products with the latest technologies and frameworks.{" "}
        <br />
        We are a team of passionate developers and designers that love to build
        amazing and innovating products at <Cover>lightspeed ⚡</Cover>.
      </section> */}
      <div className="flex min-w-[400px]">
        <Image
          src="/mango-hero.png"
          alt="Floating Mango"
          width={400}
          height={400}
          className="pointer-events-none
        animate-float rotate-3"
        />
      </div>
    </div>
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
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full  pointer-events-none"></div>
    </motion.div>
  );
};
