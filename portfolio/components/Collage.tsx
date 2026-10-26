"use client";

import { motion } from "motion/react";

type PieceProps = {
  className: string;
  rotate: number;
  delay: number;
  children: React.ReactNode;
};

function Piece({ className, rotate, delay, children }: PieceProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: -40, rotate: rotate - 10 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 30 }}
    >
      {children}
    </motion.div>
  );
}

function Doodle({
  src,
  className,
  delay,
}: {
  src: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay, duration: 0.6 },
        scale: { delay, duration: 0.6 },
        y: { delay: delay + 0.6, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
}

export default function Collage() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[520px] sm:h-[520px]">
      
      <Piece className="left-0 top-[10%] h-[45%] w-[60%]" rotate={-5} delay={0.1}>
        <img
          src="/meadow.jpeg"
          alt="Mountains"
          className="h-full w-full rounded-sm border-4 border-paper object-cover shadow-xl"
        />
      </Piece>

      
      <Piece className="bottom-[2%] right-0 h-[30%] w-[58%]" rotate={3} delay={0.5}>
        <img
          src="/meadow2.jpeg"
          alt="Mountain landscape"
          className="h-full w-full rounded-sm border-4 border-paper object-cover object-bottom shadow-xl"
        />
      </Piece>

      
      <Piece className="left-[10%] top-[3%] w-[60%]" rotate={-3} delay={0.3}>
        <div className="relative bg-paper p-3 pb-10 shadow-2xl">
          
          <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-paper/70 shadow-sm backdrop-blur-sm" />
          <img
            src="/frontface.jpeg"
            alt="Shruti Sharma"
            className="aspect-[4/5] w-full bg-panel object-cover"
          />
        </div>
      </Piece>

      
      <Piece className="right-[1%] top-[24%] w-[44%]" rotate={5} delay={0.7}>
        <motion.div
          className="bg-paper p-4 font-hand text-2xl leading-tight text-[#17352e] shadow-xl sm:text-3xl"
          whileHover={{ rotate: [0, -3, 3, -2, 0] }}
          transition={{ duration: 0.5 }}
        >
          Better Infrastructure
          <br />
          Brighter Future
          <span className="mt-1 block text-xl">♡ ‿</span>
        </motion.div>
      </Piece>

      
      <Doodle src="/collage/doodles/star.svg" className="left-[2%] top-0 w-10" delay={1} />
      <Doodle src="/collage/doodles/cloud.svg" className="right-[6%] top-0 w-24" delay={1.2} />
      <Doodle
        src="/collage/doodles/small-steps-curve.svg"
        className="bottom-[4%] left-0 w-32"
        delay={1.4}
      />
    </div>
  );
}