import { Button } from "@/components/button/Button";
import ComponentShowcase from "@/components/hero/ComponentShowcase";
import React from "react";

export default function page() {
  return (
    <ComponentShowcase
      title="Button"
      description="A customizable button component"
      component={<Button>Click me</Button>}
      code={{
        react: `<Button>Click me</Button>`,
        vue: `<button>Click me</button>`,
        angular: `<button>Click me</button>`,
      }}
      usage={`<Button>Click me</Button>`}
    />
  );
}
