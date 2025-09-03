"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore quis inventore facilis explicabo mollitia minus, harum itaque ut, debitis atque sed in tempore voluptatum impedit nostrum! Minus, a adipisci.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore quis inventore facilis explicabo mollitia minus, harum itaque ut, debitis atque sed in tempore voluptatum impedit nostrum! Minus, a adipisci.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore quis inventore facilis explicabo mollitia minus, harum itaque ut, debitis atque sed in tempore voluptatum impedit nostrum! Minus, a adipisci.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: ""
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return <motion.div>work page</motion.div>;
};

export default Work;
