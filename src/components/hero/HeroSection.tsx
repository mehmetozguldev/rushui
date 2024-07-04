"use client";

import React, { useState } from "react";
import Accordion from "../accordion/Accordion";
import { Input } from "../input/Input";
import { ShowcaseItem } from "./ShowcaseItem";
import { Alert } from "../alert/Alert";
import { Tabs } from "../tabs/Tabs";
import { Tooltip } from "../tooltip/Tooltip";
import { Card } from "../card/Card";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../button/Button";
import { Badge } from "../badge/Badge";

export const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const accordionItems = [
    {
      title: "What is Next.js?",
      content:
        "Next.js is a React framework for building JavaScript applications.",
    },
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      title: "What is TypeScript?",
      content:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    },
  ];

  const tabItems = [
    {
      label: "Tab 1",
      content: "Tab 1 content",
    },
    {
      label: "Tab 2",
      content: "Tab 2 content",
    },
    {
      label: "Tab 3",
      content: "Tab 3 content",
    },
  ];

  return (
    <section className="w-full bg-white/80">
      <div className="container mx-auto py-20">
        <div className="flex flex-col mx-auto md:w-full p-5 md:p-0 lg:w-3/5 text-center items-center align-middle gap-5">
          <span className="px-2 py-1 bg-sky-200 text-sky-700 font-medium font-mono rounded-full text-sm">
            rush/ui v1.0
          </span>
          <h1 className="font-bold text-5xl lg:text-7xl text-zinc-900 mb-3">
            Build stunning UIs with speed and precision
          </h1>
          <p className="text-lg text-zinc-600 mb-5">
            Introducing our Next.js, TailwindCSS, and TypeScript UI library –
            the ultimate toolkit for developers who demand excellence.{" "}
          </p>
          <button className="py-3 px-6 hover:bg-indigo-800 rounded-lg bg-indigo-700 text-indigo-100 transition font-medium">
            Get started
          </button>
        </div>
      </div>

      <div className="container mx-auto py-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ShowcaseItem title="Button">
          <Button>Default Button</Button>
          <Button variant="gradient" size="lg">
            Gradient Button
          </Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline" size="sm">
            Small Outline Button
          </Button>
        </ShowcaseItem>
        <ShowcaseItem title="Badge">
          <Badge>Default Badge</Badge>
          <Badge variant="secondary">Secondary Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>
          <Badge variant="outline">Outline Badge</Badge>
          <Badge variant="success">Success Badge</Badge>
          <Badge variant="warning">Warning Badge</Badge>
          <Badge variant="info">Info Badge</Badge>
          <Badge variant="gradient">Gradient Badge</Badge>
          <Badge size="sm">Small Badge</Badge>
          <Badge size="lg">Large Badge</Badge>
        </ShowcaseItem>

        <ShowcaseItem title="Dropdown">
          <div className="relative inline-block text-left">
            <button
              className="py-3 px-6 hover:bg-zinc-50 rounded-lg bg-white text-zinc-800 border transition font-medium"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Account
              <ChevronDownIcon className="inline-block w-4 h-4 ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    License
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </ShowcaseItem>
        <ShowcaseItem title="Accordion">
          <Accordion items={accordionItems} />
        </ShowcaseItem>
        <ShowcaseItem title="Input">
          <Input label="Username" placeholder="Enter your username" />
          <Input
            label="Email"
            placeholder="Enter your email"
            variant="default"
          />
        </ShowcaseItem>
        <ShowcaseItem title="Alert">
          <Alert title="Error" variant="error">
            This is an error alert
          </Alert>
          <Alert title="Warning" variant="warning">
            This is a warning alert
          </Alert>
          <Alert title="Success" variant="success">
            This is a success alert
          </Alert>
        </ShowcaseItem>
        <ShowcaseItem title="Tabs">
          <Tabs items={tabItems} />
        </ShowcaseItem>
        <ShowcaseItem title="Tooltip">
          <Tooltip content="This is a tooltip">
            <button className="py-3 px-6 hover:bg-blue-700 rounded-lg bg-blue-600 text-blue-100 transition font-medium">
              Hover me
            </button>
          </Tooltip>
        </ShowcaseItem>
        <ShowcaseItem title="Card">
          <Card title="Card title" footer="Card footer ">
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </Card>
        </ShowcaseItem>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
