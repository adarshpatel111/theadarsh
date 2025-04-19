import React from "react";
import {
  Home,
  CircleUser,
  BookOpen,
  AtSign,
  LayoutDashboard,
  Menu,
} from "lucide-react";
import { MorphingNav } from "../ui/devsloka-ui/MorphingNav";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Link, useLocation } from "react-router";

const Navbar : React.FC= () => {
  const pathRoute = useLocation();
  const navItems = [
    { id: "/", label: "Home", icon: Home, href: "/" },
    { id: "/resume", label: "Resume", icon: BookOpen, href: "/resume" },
    { id: "/about", label: "About", icon: CircleUser, href: "/about" },
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
        <div className="logo">TheAdarsh</div>

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
