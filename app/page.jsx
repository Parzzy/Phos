"use client";
import { motion, animate } from "framer-motion";
import Logo from "../components/Logo";
export default function Home() {
  return (
    <main className="bg-zinc-200 overflow-hidden">
      <div className="min-h-[100vh] min-w-[100vw] flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-center text-zinc-950"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Welcome to
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Logo textSize="text-5xl md:text-7xl" />
          </motion.div>
          <motion.p
            className="text-zinc-500 text-center text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Your one-stop for all your smartphone solutions needs!
          </motion.p>
          <motion.a
            href="/home"
            className="p-2 bg-zinc-900 text-zinc-200 rounded-md text-sm md:text-base cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            onClick={async (e) => {
              e.preventDefault();
              await animate("main", { opacity: 0, y: 20 }, { duration: 0.5 });
              window.location.href = "/home";
            }}
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </main>
  );
}
