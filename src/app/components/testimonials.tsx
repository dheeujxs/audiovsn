"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

export function Testimonials() {
  const items = [
    {
      name: "Sarah Johnson",
      role: "AI Researcher",
      text: "Audiovis transformed how I work with sound data. The feature map visualization is a game-changer.",
    },
    {
      name: "David Kim",
      role: "Full-Stack Developer",
      text: "Serverless GPU inference with Modal saved us weeks of deployment headaches. Lightning fast!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">💬 Testimonials</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-indigo-600 mb-4" />
                <p className="text-gray-700 italic">&apos;{item.text}&apos;</p>
                <div className="mt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



