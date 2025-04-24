"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "~/lib/utils";
import {
  SiRemix,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiVite,
  SiMui,
  SiTailwindcss,
  SiGithub,
  SiFirebase,
  SiReactrouter,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { RiCss3Fill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { LinkPreview } from "./link-preview";

interface FeatureItemProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  position: string;
  delay: number;
  previewLink: string;
}

const featuresData: FeatureItemProps[] = [
  {
    title: "HTML5",
    icon: <SiHtml5 className="text-orange-500" />,
    color: "bg-background",
    position: " left-[7%] top-[25%] sm:left-[5%] md:top-[10%]",
    delay: 0.1,
    previewLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "Redux",
    icon: <TbBrandRedux className="text-purple-600" />,
    color: "bg-background",
    position: "left-[40%] top-[18%] sm:left-[33%] md:top-[10%]",
    delay: 0.1,
    previewLink: "https://redux.js.org/",
  },
  {
    title: "MongoDB",
    icon: <BiLogoMongodb className="text-green-600" />,
    color: "bg-background",
    position: "right-[7%] top-[25%] sm:right-[33%] md:top-[10%]",
    delay: 0.1,
    previewLink: "https://www.mongodb.com/",
  },
  {
    title: "CSS3",
    icon: <RiCss3Fill className="text-blue-500" />,
    color: "bg-background",
    position: "right-[20%] top-[5%] sm:right-[5%] md:top-[10%]",
    delay: 0.1,
    previewLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "Vite",
    icon: <SiVite className="text-purple-500" />,
    color: "bg-background",
    position: "left-[5%] top-[45%] sm:left-[20%] md:top-[25%]",
    delay: 0.2,
    previewLink: "https://vitejs.dev/",
  },
  {
    title: "ExpressJs",
    icon: <SiExpress className="text-black dark:text-white" />,
    color: "bg-background",
    position: "right-[5%] top-[45%] sm:right-[20%] md:top-[25%]",
    delay: 0.2,
    previewLink: "https://expressjs.com/",
  },
  {
    title: "Next JS",
    icon: <TbBrandNextjs className="text-black dark:text-white" />,
    color: "bg-background",
    position: "left-[7%] top-[64%] sm:left-[15%] md:top-[45%]",
    delay: 0.3,
    previewLink: "https://nextjs.org/",
  },
  {
    title: "React-Router",
    icon: <SiReactrouter className="text-black dark:text-white" />,
    color: "bg-background",
    position: "left-[20%] top-[5%] sm:left-[0%] md:top-[35%]",
    delay: 0.3,
    previewLink: "https://reactrouter.com/",
  },
  {
    title: "Vercel",
    icon: <CgVercel className="text-black dark:text-white" />,
    color: "bg-background",
    position: "right-[10%] bottom-[25%] sm:right-[15%] md:bottom-[45%]",
    delay: 0.3,
    previewLink: "https://vercel.com/",
  },
  {
    title: "Remix",
    icon: <SiRemix className="text-blue-600" />,
    color: "bg-background",
    position:
      "left-[0%] bottom-[0%] md:left-[40%] md:bottom-[10%]",
    delay: 0.3,
    previewLink: "https://remix.run/",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    color: "bg-background",
    position: "right-[90%] top-[2%] sm:right-[0%] md:top-[35%]",
    delay: 0.3,
    previewLink: "https://tailwindcss.com/",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
    color: "bg-background",
    position: "left-[20%] bottom-[10%] sm:left-[5%] md:bottom-[10%]",
    delay: 0.5,
    previewLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "React",
    icon: <FaReact className="text-blue-500" />,
    color: "bg-background",
    position: "right-[0%] bottom-[0%] sm:right-[33%] md:bottom-[10%]",
    delay: 0.5,
    previewLink: "https://reactjs.org/",
  },
  {
    title: "GitHub",
    icon: <SiGithub className="text-black dark:text-white" />,
    color: "bg-background",
    position: "left-[40%] bottom-[18%] sm:left-[20%] md:bottom-[25%]",
    delay: 0.4,
    previewLink: "https://github.com/",
  },
  {
    title: "FireBase",
    icon: <SiFirebase className="text-black dark:text-white" />,
    color: "bg-background",
    position: "right-[0%] bottom-[100%] sm:right-[20%] md:bottom-[25%]",
    delay: 0.4,
    previewLink: "https://firebase.google.com/",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    color: "bg-background",
    position: "right-[25%] bottom-[10%] sm:right-[5%] md:bottom-[10%]",
    delay: 0.5,
    previewLink: "https://www.typescriptlang.org/",
  },
];
export function FloatingSkillsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="container w-full mx-auto mt-5 md:mt-0 py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:20px_20px] opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />

      <div className="container px-4 md:px-6 relative">
        <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center"
          >
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-background border border-border/50 shadow-lg flex items-center justify-center p-6 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-lg md:text-2xl font-bold mb-2">Skills</h3>
              </div>
            </div>
          </motion.div>

          {featuresData.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  title,
  icon,
  color,
  position,
  delay,
  previewLink,
}: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn("absolute z-10", position)}
    >
      <LinkPreview url={previewLink} className="z-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-0 md:gap-3 bg-background/80 backdrop-blur-sm border border-border/50 p-3 rounded-lg shadow-lg max-w-[150px] md:max-w-[200px]"
        >
          <div
            className={cn(
              "w-8 h-8 rounded-md flex items-center justify-center text-white shrink-0 text-3xl",
              color
            )}
          >
            {icon}
          </div>
          <div>
            <h4 className="font-medium text-xs md:text-sm hidden md:flex">{title}</h4>
          </div>
        </motion.div>
      </LinkPreview>
    </motion.div>
  );
}
