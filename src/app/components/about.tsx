"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";




export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">👋 About Audiovis</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Audiovis is a deep learning-powered framework for real-time sound
          classification. Using a ResNet-inspired CNN architecture, advanced
          data augmentation, and serverless GPU inference, Audiovis enables
          developers to build intelligent audio applications faster than ever.
        </p>

        <div className="mt-8">
          <Button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg">
            <Link href='/dashboard'>  Get Started</Link>
          
          </Button>
        </div>
      </div>
    </section>
  );
}
