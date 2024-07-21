"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaReact, FaVuejs, FaAngular } from "react-icons/fa";
import { Button } from "../button/Button";
import {
  CheckIcon,
  CopyIcon,
  EyeIcon,
  CodeIcon,
  BookOpenIcon,
} from "lucide-react";

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
  const [copyCodeText, setCopyCodeText] = useState<string>("Copy Code");
  const [copyCodeIcon, setCopyCodeIcon] = useState<React.ReactElement>(
    <CopyIcon size={16} />
  );

  const tabOptions = [
    { key: "preview", label: "Preview", icon: <EyeIcon size={16} /> },
    { key: "code", label: "Code", icon: <CodeIcon size={16} /> },
    { key: "usage", label: "Usage", icon: <BookOpenIcon size={16} /> },
  ];

  const techOptions: TechOptions = {
    react: { label: "React", icon: <FaReact /> },
    vue: { label: "Vue", icon: <FaVuejs /> },
    angular: { label: "Angular", icon: <FaAngular /> },
  };

  const copyCode = (): void => {
    navigator.clipboard.writeText(code[selectedTech]);
    setCopyCodeText("Copied!");
    setCopyCodeIcon(<CheckIcon size={16} />);
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
          {tabOptions.map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 flex items-center gap-2 ${
                activeTab === tab.key
                  ? "bg-white border-b-2 border-blue-500 font-medium"
                  : "bg-white text-gray-600 hover:text-gray-900"
              }`}
              onClick={() =>
                setActiveTab(tab.key as "preview" | "code" | "usage")
              }
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-5">
        {activeTab === "preview" && (
          <div className="p-5 bg-zinc-100 rounded-lg">{component}</div>
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
              <Button
                onClick={copyCode}
                variant="default"
                className="flex items-center gap-2"
              >
                {copyCodeIcon}
                {copyCodeText}
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
