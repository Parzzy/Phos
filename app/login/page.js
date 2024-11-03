"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Login() {
  const inputStyle = "p-2 bg-zinc-800 rounded-xl border-2 border-zinc-600 text-center text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:transition-all focus:ease-in-out focus:text-xl focus:font-bold w-full";
  const buttonStyle = "bg-indigo-500 text-zinc-200 p-2 rounded-md w-full hover:bg-indigo-600 transition-colors duration-300";

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4">
        <header className="flex flex-col gap-2 mb-6 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <small className="text-zinc-500">
            Enter your credentials to access your account
          </small>
        </header>
        <motion.form 
        initial={{ opacity: 0.8, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4 w-full p-6 bg-zinc-800 rounded-xl">
          <input type="email" placeholder="Email" className={inputStyle} />
          <input type="password" placeholder="Password" className={inputStyle} />
          <button type="submit" className={buttonStyle}>Login</button>
        </motion.form>
        <div className="mt-4 text-center">
          <p className="text-zinc-500">Don&apos;t have an account?</p>
          <Link href="/signup" className="text-indigo-500 hover:text-indigo-400 transition-colors duration-300">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
