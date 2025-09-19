"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import Navbar from "./components/Navbar";
import { About } from "./components/about";
import { Features } from "./components/features";
import { Testimonials } from "./components/testimonials";
import { Benefits } from "./components/benefits";
import { FAQ } from "./components/faq";
import { CTA } from "./components/cta";


const  page=()=> {
  return (
    <>
    <Navbar />
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden">
      {/* Animated vertical line */}
      <motion.div
        className="absolute top-8 left-0 w-[2px] h-14 bg-indigo-600 rounded-full"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 32, opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl text-center px-6 mt-24">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          🧠 Deep Audio CNN <br />
          <span className="text-indigo-600">Sound Classification</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Build smarter audio applications with a ResNet-inspired architecture,  
          advanced data augmentation, and real-time inference pipelines.
        </p>

        {/* Features Grid */}
    

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg">
            <Link href='/dashboard'>
            Try Demo
            </Link>
          </Button>

          <Button
            variant="outline"
            className="px-8 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 text-lg hover:bg-indigo-50"
          >
            View Docs
          </Button>
        </div>
      </div>
    </section>
    <About/>
    <Features />
    <Testimonials/>
    <Benefits/>
    <FAQ/>
    <CTA/>
    </>
    
  );
}
export default page

