"use client";

import React, { useState } from "react";
import { GlassCard } from "../glass/GlassCard";
import AnimatedBlobs from "../blobs/AnimatedBlobs";
import { GlassInput } from "../glass/GlassInput";
import { GlassSelect } from "../glass/GlassSelect";
import { GlassButton } from "../glass/GlassButton";

export const GlassShowcase = () => {
  const glassSelectOptions = [
    {
      value: "example",
      label: "Example value",
    },
  ];
  return (
    <section className="relative w-full bg-gradient-to-tr from-indigo-600 to-violet-500 py-32 overflow-hidden">
      <AnimatedBlobs />
      <div className="container mx-auto py-8 relative z-10">
        <div className="flex flex-col mx-auto md:w-full p-5 md:p-0 lg:w-3/5 text-center items-center align-middle gap-5">
          <h1 className="font-bold text-5xl lg:text-7xl text-indigo-100 mb-3">
            Meet glass components
          </h1>
          <button className="py-3 px-6 hover:bg-indigo-200 rounded-lg bg-indigo-100 text-indigo-700 transition font-medium">
            Get started
          </button>
        </div>
      </div>

      <div className="container mx-auto py-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        <GlassCard title="Input">
          <GlassInput label="Email / username" />
          <GlassInput label="Password" />
        </GlassCard>
        <GlassCard title="Select">
          <GlassSelect label="Select a value" options={glassSelectOptions} />
        </GlassCard>
        <GlassCard title="Button">
          <GlassButton>Click here</GlassButton>
        </GlassCard>
        {/* Add more GlassCard components here */}
        <div className="col-span-3 text-center p-12">
          <h2 className="font-mono text-lg lg:text-2xl text-indigo-300 mb-3">
            more components coming soon 🏎️
          </h2>
        </div>
      </div>
    </section>
  );
};
