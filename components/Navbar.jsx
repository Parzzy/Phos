"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const isHovered =
    "hover:text-xl transition-all hover:font-bold hover:ease-in-out";
  const pathname = usePathname();
  return (
    <nav className="flex justify-between md:justify-center items-center gap-4 md:gap-12 min-w-full md:min-w-fit text-zinc-200 fixed bottom-0 md:relative md:bottom-auto bg-zinc-950 p-2">
      <Link
        className={`${isHovered} ${
          pathname === "/" ? "text-xl font-bold" : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${isHovered} ${
          pathname === "/questions" ? "text-xl font-bold" : ""
        }`}
        href="/questions"
      >
        Questions
      </Link>
      <Link
        className={`${isHovered} ${
          pathname === "/login" ? "text-xl font-bold" : ""
        }`}
        href="/login"
      >
        Login
      </Link>
      <Link
        className={`${isHovered} ${
          pathname === "/about" ? "text-xl font-bold" : ""
        }`}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
