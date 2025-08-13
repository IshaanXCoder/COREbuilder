"use client";
import React, { useState, useEffect } from "react";
import { IconHome, IconUser, IconCode, IconTemplate, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function FloatingNavDemo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <IconTemplate className="h-4 w-4" />,
    },
    {
      name: "Explore",
      link: "/explore",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "IDE",
      link: "/ide",
      icon: <IconCode className="h-4 w-4" />,
    },
    {
      name: "Builder",
      link: "/drag-drop",
      icon: <IconCode className="h-4 w-4" />,
    },
    {
      name: "Pipeline",
      link: "/pipeline",
      icon: <IconCode className="h-4 w-4" />,
    },
    {
      name: "AI-Query",
      link: "/nlp",
      icon: <IconCode className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/[0.08] backdrop-blur-[20px] border-b border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
            : 'bg-white/[0.02] backdrop-blur-[10px] border-b border-white/[0.06]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)'
        }}
      >
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(251,146,60,0.3)]">
                  <IconCode className="h-7 w-7 text-white" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl blur-xl opacity-50 animate-pulse" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-neutral-100 to-white bg-clip-text text-transparent">
                COREbuilder
              </span>
            </motion.div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center space-x-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {(() => {
                    const isActive = pathname === item.link;
                    return (
                  <Link
                    href={item.link}
                    className="relative px-6 py-3 rounded-2xl transition-colors duration-200 text-white/80"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div>
                        {item.icon}
                      </div>
                      <span className="font-medium text-sm tracking-wide">{item.name}</span>
                    </div>
                  </Link>
                    );
                  })()}
                </motion.div>
              ))}

              {/* CTA */}
              <Link
                href="/drag-drop"
                className="ml-3 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-yellow-600 text-white border border-orange-500/30 shadow-[0_8px_24px_rgba(251,146,60,0.25)] transition-colors duration-200"
              >
                Launch Builder
              </Link>
            </div>

            {/* Mobile Menu Button */}
          <motion.button
              className="md:hidden p-3 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white hover:bg-white/[0.15] transition-all duration-500 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-20 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/30 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-white/[0.08] backdrop-blur-[20px] border-b border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)'
              }}
            >
              <div className="px-6 py-6">
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.link}
                        className="flex items-center space-x-4 px-5 py-4 rounded-2xl transition-colors duration-200 text-white/80"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-6 h-6 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="font-medium text-base">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                  {/* CTA on mobile */}
                  <Link
                    href="/drag-drop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-yellow-600 text-white border border-orange-500/30 shadow-[0_8px_24px_rgba(251,146,60,0.25)] transition-colors duration-200"
                  >
                    Launch Builder
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-24" />
    </>
  );
}