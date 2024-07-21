import ComponentShowcase from "@/components/hero/ComponentShowcase";
import { HomeIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Sidebar } from "@/components/blocks/sidebar/Sidebar";

export default function Page() {
  const sidebarItems = [
    { icon: <HomeIcon />, label: "Home", href: "/" },
    { icon: <UserIcon />, label: "Profile", href: "/profile" },
    { icon: <SettingsIcon />, label: "Settings", href: "/settings" },
  ];
  return (
    <div className="flex">
      <Sidebar
        items={sidebarItems}
        variant="light"
        size="md"
        position="left"
        isCollapsible={true}
        logo={<img src="/logo.png" alt="Logo" />}
        footer={<p>© 2024 My Company</p>}
      />
      <main className="flex-grow">{/* Your main content here */}</main>
    </div>
  );
}
