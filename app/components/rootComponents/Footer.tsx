"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.3 });
  const links = [
    {
      title: "Links",
      items: [
        { title: "Resume", href: "/resume" },
        { title: "Projects", href: "/projects" },
        { title: "Contact Me", href: "/contact-me" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: X,
      label: "X",
      href: "https://x.com/AdarshPatel2211?t=xcDnfsKcCgMGvdey4CUPpw&s=09",
    },
    { icon: Linkedin, label: "LinkedIn", href: "" },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/adarshpatel111",
    },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Vadodara,Gujarat" },
    { icon: Phone, text: "+91 8320018439" },
    { icon: Mail, text: "adarshpatel11012001@gmail.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingElements = Array.from({ length: 15 }).map(() => ({
    size: Math.random() * 40 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-background to-background/95 pt-24 pb-12 overflow-hidden"
    >
      {/* Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            style={{
              width: el.size,
              height: el.size,
              left: `${el.x}%`,
              top: `${el.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              duration: el.duration,
              delay: el.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-6"
          >
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

            <p className="text-muted-foreground max-w-md">
              Feel free to reach me, and we can work on improving or
              enhancing your Website or web-apps.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/20 transition-colors"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={social.href}>
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-1 gap-8"
          >
            {links.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-lg font-semibold relative">
                  <span className="relative z-10">{group.title}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-1 bg-primary/30 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "30%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <motion.li
                      key={item.href + item.title}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        to={item.href}
                        className="group flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>{item.title}</span>
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="ml-1"
                        >
                          <ArrowUpRight className="w-3 h-3 inline" />
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-lg font-semibold relative">
              <span className="relative z-10">Contact Me</span>
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-primary/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "30%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h3>

            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                  whileHover={{
                    x: 5,
                    color: "var(--foreground)",
                  }}
                >
                  <div className="bg-muted/50 p-2 rounded-md">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4">
              <motion.button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={"/contact-me"}>Get in Touch</Link>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
