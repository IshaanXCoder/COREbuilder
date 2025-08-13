"use client"
import { useEffect } from "react"
import { Spotlight } from "@/components/home/spotlight"
import { cn } from "@/lib/utils"
import { MarqueeCards } from "@/components/ui/MarqueeCards"
import Footer from "@/components/home/Footer"
import { motion } from "framer-motion"
import { ArrowRight, Play, ChevronDown } from "lucide-react"
import { WobbleCardDemo } from "@/components/WobbleCard"
import { FeaturesSectionDemo } from "@/components/Featuresection"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import { Cover } from "@/components/ui/cover"
import Link from "next/link"

// Modern network background with mesh gradients
const NetworkBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
      <div className="mesh-gradient-1 absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  )
}

// Hero video background with enhanced overlays
const HeroVideoBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-[1%] left-0 w-full h-[99%] object-cover opacity-98"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-neutral-950/10 to-black/30" />
      <div className="mesh-gradient-1 absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <NetworkBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24 min-h-screen flex items-center mt-20">
        <HeroVideoBackground />
        
        {/* Subtle grid pattern */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:60px_60px] select-none opacity-[0.15]",
            "[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]",
          )}
        />

        {/* Enhanced spotlight */}
        <div className="absolute inset-0">
          <Spotlight />
        </div>

        <div className="max-w-7xl mx-auto w-full relative">
          {/* Hero Content - Centered and with better spacing */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-black leading-tight mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-white via-neutral-100 to-white bg-clip-text text-transparent">
                Welcome to <Cover>COREbuilder</Cover>
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Build, deploy, and scale smart contracts on Core's high-performance blockchain. Experience fast transactions and EVM compatibility with next-generation development tools.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link
                href="/drag-drop"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white transition-all duration-300 ease-out bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 rounded-xl border border-orange-500/30 hover:border-orange-400/40 shadow-lg hover:shadow-orange-500/20 hover:shadow-xl transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-300/10 to-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <a
                href="#features"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-neutral-300 transition-all duration-300 ease-out bg-neutral-900/60 hover:bg-neutral-800/60 rounded-xl border border-neutral-700/50 hover:border-neutral-600/60 backdrop-blur-sm hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <div className="p-4 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-full group-hover:bg-neutral-900/60 transition-all duration-300 hover:scale-110">
            <ChevronDown className="w-7 h-7 text-orange-400 group-hover:text-orange-300" />
          </div>
        </div>
      </section>

      <div className="px-6">
        <HeroScrollDemo/>
      </div>

      


      {/* CTA Section */}
      <section className="relative py-32 px-6 sm:px-12">
        <WobbleCardDemo/>
      </section>
      {/* Contracts Section */}
      <section className="relative py-32 px-6 sm:px-12 overflow-hidden">
        <div className="mesh-gradient-2 absolute inset-0 opacity-30"></div>
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent">
            Explore Our Contracts
          </h2>
          <MarqueeCards />
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}