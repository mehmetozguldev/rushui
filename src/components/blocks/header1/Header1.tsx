import Link from "next/link";
import { Button } from "@/components/button/Button";

export default function Header1() {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto py-4 flex items-center align-middle gap-5 justify-between">
        <div>
          <span>rush/ui</span>
        </div>
        <nav className="flex gap-3 items-center align-middle">
          <Link href="#">
            <Button variant="ghost">Solutions</Button>
          </Link>
          <Link href="#">
            <Button variant="ghost">Products</Button>
          </Link>
          <Link href="#">
            <Button variant="ghost">Resources</Button>
          </Link>
        </nav>
        <Link href="#">
          <Button>Get Started</Button>
        </Link>
      </div>
    </header>
  );
}
