"use client";
import Data from "../../components/Data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const data = Data();
  const inputStyle ="p-1 bg-zinc-800 rounded-xl border-2 border-zinc-600 text-center text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:transition-all focus:ease-in-out focus:text-xl focus:font-bold"
  return (
    <div className="min-h-screen mx-4 md:mx-20 md:mb-10">
      <header className="flex flex-col gap-2 ml-4 mt-4">
        <h1 className="text-4xl font-bold">Home</h1>
        <small className="text-zinc-500">
          Welcome to PhosTech, your one-stop for all your smartphone solutions
          needs!
        </small>
      </header>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <section className="flex flex-col gap-4 my-4 md:items-center md:w-[75%] w-full">
          <h2 className="text-2xl font-bold ml-4">Latest Questions</h2>
          <div className="flex flex-col gap-4 w-full">
            {data.map((ticket) => (
              <Link
                href={`/question/${ticket.id}`}
                key={ticket.id}
                className="border-4 border-transparent hover:border-indigo-500 rounded-2xl transition-colors duration-300"
              >
                <motion.div className="flex flex-col gap-2 p-4 bg-zinc-800 rounded-xl"
                initial={{ opacity: 0.8, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-zinc-200">
                    {ticket.title}
                  </h3>
                  <p className="text-zinc-400">Description: {ticket.snippet}</p>
                  <p className="text-zinc-400">Solution: {ticket.solution}</p>
                  <small className="text-zinc-500">Date: {ticket.date}</small>
                  <div className="flex justify-end">
                    <small className={`${ticket.solved ? "bg-green-500" : "bg-red-500"} p-1 rounded-md text-zinc-200 w-fit`}>
                      Solved: {ticket.solved ? "Yes" : "No"}
                    </small>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4 my-4 md:items-center md:w-[25%]">
          <h2 className="text-2xl font-bold ml-4">Ask a Question</h2>
          <form className="flex flex-col gap-4 w-full p-4 bg-zinc-800 rounded-xl">
            <input type="text" placeholder="Title" className={inputStyle} />
            <input type="text" placeholder="Snippet" className={inputStyle} />
            <input type="text" placeholder="Description" className={inputStyle} />
            <button type="submit" className="bg-indigo-500 text-zinc-200 p-2 rounded-md">Submit</button>
          </form>
        </section>

      </div>
    </div>
  );
}
