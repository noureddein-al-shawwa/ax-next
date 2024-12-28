"use client";

import { m as motion } from "motion/react";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: "0%", x: "0%", rotate: 0 }}
        animate={{ opacity: 0, y: "50%", x: "-100%", rotate: -30, scale: 1.5 }}
        transition={{ duration: 1 }}
        className="fixed w-screen h-screen inset-0 bg-gradient-to-l blur-[30px] from-neutral-200 to-yellow-100 from-[30%] z-[56] pointer-events-none"
      />

      {children}
    </>
  );
}
