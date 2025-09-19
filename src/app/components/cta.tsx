"use client";

import { Button } from "~/components/ui/button";



export function CTA() {
  return (
    <section id="cta" className="py-24 bg-indigo-600">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">🚀 Ready to get started?</h2>
        <p className="mt-4 text-lg text-indigo-100">
          Build, train, and deploy your own audio intelligence apps today.
        </p>
        <div className="mt-8">
          <Button asChild className="px-8 py-3 rounded-full bg-white text-indigo-600 text-lg hover:bg-indigo-100">
            <a href="/dashboard">Go to Dashboard</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
