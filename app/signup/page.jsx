"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Signup() {
  const inputStyle = "p-2 bg-zinc-800 rounded-xl border-2 border-zinc-600 text-center text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:transition-all focus:ease-in-out focus:text-xl focus:font-bold w-full";
  const buttonStyle = "bg-indigo-500 text-zinc-200 p-2 rounded-md w-full hover:bg-indigo-600 transition-colors duration-300";

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4">
        <header 
        className="flex flex-col gap-2 mb-6 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <small className="text-zinc-500">
            Create an account to start using our services
          </small>
        </header>
        <motion.form 
        initial={{ opacity: 0.8, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4 w-full p-6 bg-zinc-800 rounded-xl">
          <input type="text" placeholder="Full Name" className={inputStyle} />
          <input type="email" placeholder="Email" className={inputStyle} />
          <input type="password" placeholder="Password" className={inputStyle} />
          <input type="password" placeholder="Confirm Password" className={inputStyle} />
          <button type="submit" className={buttonStyle}>Sign Up</button>
        </motion.form>
        <div className="mt-4 text-center">
          <p className="text-zinc-500">Already have an account?</p>
          <Link href="/login" className="text-indigo-500 hover:text-indigo-400 transition-colors duration-300">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
