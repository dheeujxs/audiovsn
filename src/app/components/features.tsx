"use client";


import { Cpu, BarChart3, Rocket, AudioWaveform } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";


export function Features() {
  const items = [
    {
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      title: "ResNet-Style CNN",
      desc: "Powerful residual blocks enable deep feature extraction for robust sound classification.",
    },
    {
      icon: <AudioWaveform className="w-8 h-8 text-indigo-600" />,
      title: "Audio-to-Image",
      desc: "Mel spectrogram conversion transforms raw audio into images optimized for CNNs.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: "Interactive Dashboard",
      desc: "Visualize training metrics, confidence scores, and feature maps in real time.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      title: "FastAPI + Modal",
      desc: "Serverless GPU inference with blazing fast endpoints for production-ready AI apps.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          🚀 Features
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Built for audio intelligence, optimized for developers.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


