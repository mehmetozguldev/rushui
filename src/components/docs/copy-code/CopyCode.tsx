"use client";
import React, { useState } from "react";
import { Button } from "@/components/button/Button";

export const CodeBlock = ({ code }: any) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        <code className="text-sm">{code}</code>
      </pre>
      <Button
        onClick={copyToClipboard}
        className="absolute top-2 right-2"
        size="sm"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};
