import React from "react";
import { Home, BookOpen, AtSign, LayoutDashboard, Menu } from "lucide-react";
import { MorphingNav } from "../ui/devsloka-ui/MorphingNav";
import { Button } from "~/components/ui/button";

import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Link, useLocation } from "react-router";

const Navbar: React.FC = () => {
  const pathRoute = useLocation();
  const navItems = [
    { id: "/", label: "Home", icon: Home, href: "/" },
    { id: "/resume", label: "Resume", icon: BookOpen, href: "/resume" },
    {
      id: "/projects",
      label: "Projects",
      icon: LayoutDashboard,
      href: "projects",
    },
    {
      id: "/contact-me",
      label: "Contact Me",
      icon: AtSign,
      href: "contact-me",
    },
  ];
  return (
    <div className="container flex justify-center align-ceneter mx-auto">
      <div className="container flex justify-between items-center bg-background/70 backdrop-blur-lg fixed top-6 z-50 py-4 px-10 border border-dashed rounded-xl shadow-md ">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <motion.div
              className="absolute inset-0 rounded-lg bg-primary/20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                borderRadius: ["20%", "50%", "20%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute inset-2 rounded-md bg-primary"
              animate={{
                rotate: [0, 180, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 0.5,
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl gradient-text">
              A
            </div>
          </div>
          <span className="text-2xl font-semibold logo-span gradient-text">
            TheAdarsh
          </span>
        </div>

        <MorphingNav
          items={navItems}
          value={pathRoute.pathname}
          className="hidden lg:flex"
          activeClass="bg-primary"
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex lg:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>The Adarsh</SheetTitle>
            </SheetHeader>
            <div className="p-4 space-y-3">
              {navItems.map((menu, idx) => (
                <SheetClose asChild key={menu.href + idx}>
                  <Link
                    className={`${
                      pathRoute.pathname === menu.href
                        ? "text-blue-400"
                        : "text-primary"
                    } block`}
                    to={menu.href}
                  >
                    {menu.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
