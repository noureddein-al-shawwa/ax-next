"use client";
import { motion } from "motion/react";
import { BlurProps } from "@/types";
import { useMemo } from "react";
import { generateRandomColors } from "@/utils/generateRandomColors";

export default function BgBlur({ animated, seed }: Readonly<BlurProps>) {
  const divs = [
    {
      className:
        "w-[200px] h-[100px] absolute bg-white left-0 top-0 blur-[150px]",
    },
    {
      className:
        "w-[200px] h-[100px] absolute bg-[#720EFF] left-52 top-52 blur-[150px]",
    },
    { className: "w-[100px] h-[500px] absolute bg-[#FF0000] blur-[150px]" },
    {
      className:
        "w-[100px] h-[500px] absolute bg-[#0EFFEB] right-32 blur-[200px]",
    },
    {
      className:
        "w-[100px] h-[500px] absolute bg-[#FF0000] right-0 blur-[150px]",
    },
    { className: "w-[100px] h-[500px] absolute bg-[#FF0000] blur-[150px]" },
    {
      className: "w-[100px] h-[500px] absolute bg-[#FFBB00] top-0 blur-[150px]",
    },
    {
      className:
        "w-[200px] h-[100px] absolute bg-[#720EFF] left-52 bottom-52 blur-[150px]",
    },
    {
      className:
        "w-[200px] h-[600px] absolute bg-[#E8D2FF]/50 left-0 bottom-52 blur-[150px]",
    },
    {
      className:
        "w-[200px] h-[600px] absolute bg-[#E8D2FF]/50 right-0 bottom-52 blur-[150px]",
    },
  ];

  const randomColors = useMemo(
    () => (seed ? generateRandomColors(seed, divs.length) : []),
    [divs.length, seed]
  );

  return (
    <>
      {divs.map((div, index) => {
        const defaultColor =
          RegExp(/bg-\[(#[^\]]+)\]/).exec(div.className)?.[1] ?? "white";
        const bgColor = randomColors[index] || defaultColor;
        const BlurBox = animated ? motion.div : "div";

        return (
          <BlurBox
            key={index}
            className={div.className.replace(/bg-\[(#[^\]]+)\]/, "")}
            style={{ backgroundColor: bgColor }}
            {...(animated && {
              animate: {
                x: [0, index - 20 * 1, Math.random() * 40 - 20, 0],
                y: [0, index * 1 - 20, index * 10, 0],
              },
              transition: {
                duration: 5,
                delay: index * 0.05,
                repeat: Infinity,
                ease: "easeInOut",
              },
            })}
          />
        );
      })}
    </>
  );
}
