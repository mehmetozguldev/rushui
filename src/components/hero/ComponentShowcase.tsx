"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaReact, FaVuejs, FaAngular } from "react-icons/fa";
import { Button } from "../button/Button";

interface CodeOptions {
  [key: string]: string;
}

interface TechOptions {
  [key: string]: {
    label: string;
    icon: React.ReactElement;
  };
}

interface ComponentShowcaseProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: CodeOptions;
  usage: string;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  component,
  code,
  usage,
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "usage">(
    "preview"
  );
  const [selectedTech, setSelectedTech] = useState<string>("react");

  const techOptions: TechOptions = {
    react: { label: "React", icon: <FaReact /> },
    vue: { label: "Vue", icon: <FaVuejs /> },
    angular: { label: "Angular", icon: <FaAngular /> },
  };

  const copyCode = (): void => {
    navigator.clipboard.writeText(code[selectedTech]);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-8">
      <div className="bg-white flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
            Component
          </span>
        </div>
        <p className=" text-gray-600">{description}</p>
        <nav className="flex gap-3 ">
          {["preview", "code", "usage"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "secondary" : "ghost"}
              onClick={() => setActiveTab(tab as "preview" | "code" | "usage")}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </nav>
      </div>
      <div className="mt-5">
        {activeTab === "preview" && (
          <div className="preview-area">{component}</div>
        )}
        {activeTab === "code" && (
          <div>
            <div className="flex justify-between mb-4">
              <div className="inline-flex rounded-md shadow-sm">
                {Object.entries(techOptions).map(([value, { label, icon }]) => (
                  <button
                    key={value}
                    onClick={() => setSelectedTech(value)}
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium
                      ${
                        selectedTech === value
                          ? "text-blue-700 bg-blue-100 hover:bg-blue-200"
                          : "text-gray-700 bg-white hover:bg-gray-50"
                      } 
                      ${value === "react" ? "rounded-l-lg" : ""}
                      ${value === "angular" ? "rounded-r-lg" : ""}
                      border border-gray-200`}
                  >
                    {icon}
                    <span className="ml-2">{label}</span>
                  </button>
                ))}
              </div>
              <Button onClick={copyCode} variant="default">
                Copy Code
              </Button>
            </div>
            <SyntaxHighlighter language="javascript" style={materialDark}>
              {code[selectedTech]}
            </SyntaxHighlighter>
          </div>
        )}
        {activeTab === "usage" && (
          <div className="usage-area">
            <SyntaxHighlighter language="javascript" style={materialDark}>
              {usage}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentShowcase;
