"use client";


import { CheckCircle2 } from "lucide-react";



export function Benefits() {
  const items = [
    "ResNet-inspired deep learning architecture",
    "Mel Spectrogram audio preprocessing",
    "Advanced augmentation with Mixup & masking",
    "Interactive Next.js dashboard",
    "FastAPI serverless inference",
    "Real-time confidence scoring",
  ];

  return (
    <section id="benefits" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">✨ Benefits</h2>

        <div className="relative mt-16">
          {/* Vertical line in center */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-indigo-200"></div>

          <div className="space-y-12">
            {items.map((item, idx) => (
              <div key={idx} className={`flex items-center ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 w-[320px] relative">
                  <CheckCircle2 className="absolute -left-5 top-5 w-6 h-6 text-indigo-600 bg-white rounded-full" />
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


