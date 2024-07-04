"use client";

import React, { useState } from "react";
import Accordion from "../accordion/Accordion";
import { Input } from "../input/Input";
import { ShowcaseItem } from "./ShowcaseItem";
import { Alert } from "../alert/Alert";
import { Modal } from "../modal/Modal";
import { Tabs } from "../tabs/Tabs";
import { Tooltip } from "../tooltip/Tooltip";
import { Card } from "../card/Card";

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
    <section className="w-full bg-gradient-to-tr from-blue-50 to-cyan-50">
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
          <button className="py-3 px-6 hover:bg-blue-700 rounded-lg bg-blue-600 text-blue-100 transition font-medium">
            Get started
          </button>
        </div>
      </div>
      <div className="container mx-auto py-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white  shadow hover:shadow-indigo-100 hover:shadow-xl border-zinc-200 transition duration-500 rounded-xl  flex flex-col p-8 gap-5 ">
          <h3 className="font-semibold text-xl text-zinc-700">Button</h3>
          <div className=" bg-zinc-100 border rounded-lg p-3 text-sm text-zinc-600 flex gap-3 flex-wrap">
            <button className="py-3 px-6 hover:bg-blue-700 rounded-lg bg-blue-600 text-blue-100 transition font-medium">
              Primary
            </button>
            <button className="py-3 px-6 hover:bg-zinc-300 rounded-lg bg-zinc-200 text-zinc-800 transition font-medium">
              Secondary
            </button>
            <button className="py-3 px-6 hover:bg-red-700 rounded-lg bg-red-600 text-red-100 transition font-medium">
              Danger
            </button>
            <button className="py-3 px-6 hover:bg-green-700 rounded-lg bg-green-600 text-green-100 transition font-medium">
              Success
            </button>
          </div>
        </div>
        <div className="bg-white  shadow hover:shadow-indigo-100 hover:shadow-xl border-zinc-200 transition duration-500 rounded-xl  flex flex-col p-8 gap-5 ">
          <h3 className="font-semibold text-xl text-zinc-700">Badge</h3>
          <div className=" bg-zinc-100 border rounded-lg p-3 text-sm text-zinc-600 flex gap-3 flex-wrap">
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-600 text-blue-100">
              New
            </span>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-600 text-red-100">
              Alert
            </span>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-600 text-green-100">
              Success
            </span>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-yellow-600 text-yellow-100">
              Warning
            </span>
          </div>
        </div>
        <div className="bg-white  shadow hover:shadow-indigo-100 hover:shadow-xl border-zinc-200 transition duration-500 rounded-xl  flex flex-col p-8 gap-5 ">
          <h3 className="font-semibold text-xl text-zinc-700">Dropdown</h3>
          <div className=" bg-zinc-100 border rounded-lg p-3 text-sm text-zinc-600 flex gap-3 flex-wrap">
            <div className="relative inline-block text-left">
              <button
                className="py-3 px-6 hover:bg-blue-700 rounded-lg bg-blue-600 text-blue-100 transition font-medium"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Account
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
          </div>
        </div>
        <div className="bg-white  shadow hover:shadow-indigo-100 hover:shadow-xl border-zinc-200 transition duration-500 rounded-xl  flex flex-col p-8 gap-5 ">
          <h3 className="font-semibold text-xl text-zinc-700">Accordion</h3>
          <div className=" bg-zinc-100 border rounded-lg p-3 text-sm text-zinc-600 flex gap-3 flex-wrap">
            <Accordion items={accordionItems} />
          </div>
        </div>
        <ShowcaseItem title="Button">
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
        <ShowcaseItem title="card">
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
